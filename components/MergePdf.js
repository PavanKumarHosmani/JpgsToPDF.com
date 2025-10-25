"use client";

import { useState } from "react";

export default function MergePdf() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [pdfLib, setPdfLib] = useState(null);
  const [pdfjs, setPdfjs] = useState(null);
  const [toast, setToast] = useState("");

  const showToast = (msg, duration = 3000) => {
    setToast(msg);
    setTimeout(() => setToast(""), duration);
  };

  const handleFileChange = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setDownloadUrl(null);

    if (!pdfLib || !pdfjs) {
      console.log("📦 Loading PDF libraries...");
      const [{ PDFDocument }, pdfjsLib] = await Promise.all([
        import("pdf-lib"),
        import("pdfjs-dist"),
      ]);
      await import("pdfjs-dist/build/pdf.worker.entry");
      setPdfLib({ PDFDocument });
      setPdfjs(pdfjsLib);
      console.log("✅ PDF libraries loaded on demand");
    }
  };

  const isImageHeavy = (pdfDoc) => {
    try {
      const pages = pdfDoc.getPages();
      let imagePages = 0;
      for (const page of pages) {
        const { xObjectNames } = page.node;
        if (xObjectNames && xObjectNames.size > 0) imagePages++;
      }
      return imagePages / pages.length > 0.3;
    } catch {
      return false;
    }
  };

  const compressStandard = async (file) => {
    const data = await file.arrayBuffer();
    const pdfDoc = await pdfLib.PDFDocument.load(data);
    const compressed = await pdfDoc.save({ useObjectStreams: true });
    return new File([compressed], file.name, { type: "application/pdf" });
  };

  const compressHigh = async (file) => {
    const data = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data }).promise;
    const newPdf = await pdfLib.PDFDocument.create();
    const scale = 0.55;
    const quality = 0.75;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: ctx, viewport }).promise;
      const img = canvas.toDataURL("image/jpeg", quality);
      const jpg = await newPdf.embedJpg(img);
      const p = newPdf.addPage([jpg.width, jpg.height]);
      p.drawImage(jpg, { x: 0, y: 0, width: jpg.width, height: jpg.height });
    }

    const bytes = await newPdf.save();
    return new File([bytes], file.name, { type: "application/pdf" });
  };

  const compressSmart = async (file) => {
    try {
      const data = await file.arrayBuffer();
      const pdfDoc = await pdfLib.PDFDocument.load(data);
      const heavy = isImageHeavy(pdfDoc);
      return heavy ? await compressHigh(file) : await compressStandard(file);
    } catch (err) {
      console.error("Compression failed:", err);
      return file;
    }
  };

  const handleMerge = async () => {
    if (files.length < 2) return alert("Please select at least 2 PDF files.");
    if (!pdfLib || !pdfjs) return alert("PDF libraries are still loading...");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/pdf/upload-urls`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileCount: files.length }),
        }
      );
      const { operationId, uploadUrls } = await res.json();

      for (let i = 0; i < files.length; i++) {
        const compressed = await compressSmart(files[i]);
        await fetch(uploadUrls[i].url, {
          method: "PUT",
          headers: { "Content-Type": "application/pdf" },
          body: compressed,
        });
      }

      const fileKeys = uploadUrls.map((u) => u.fileKey);
      const mergeRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/pdf/merge/start`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ operationId, fileKeys }),
        }
      );
      const { downloadUrl } = await mergeRes.json();
      setDownloadUrl(downloadUrl);
    } catch (err) {
      console.error("Merge failed:", err);
      alert("Merge failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      showToast("📥 Download started...");
      const res = await fetch(downloadUrl);
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "merged.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(blobUrl);

      showToast("✅ Download complete!");
    } catch (err) {
      console.error("Download failed:", err);
      showToast("❌ Download failed!");
    }
  };

  const handleReset = () => {
    setFiles([]);
    setDownloadUrl(null);
  };

  return (
    <div className="relative p-8 border rounded-lg shadow-md bg-white max-w-lg mx-auto transition-all duration-300">
      {/* ✅ Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50 animate-fadeIn">
          {toast}
        </div>
      )}

      {!downloadUrl ? (
        <>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Smart Merge & Auto-Compress PDFs
          </h2>

          <label htmlFor="pdfInput" className="block mb-2 font-medium text-gray-700">
            Select PDF files to merge
          </label>
          <input
            id="pdfInput"
            type="file"
            accept="application/pdf"
            multiple
            onChange={handleFileChange}
            aria-describedby="pdfHelp"
            className="block w-full text-sm text-gray-700 
                       file:mr-4 file:py-2 file:px-4 
                       file:rounded-full file:border-0 
                       file:text-sm file:font-semibold
                       file:bg-green-50 file:text-green-600
                       hover:file:bg-green-100 cursor-pointer"
          />
          <p id="pdfHelp" className="text-sm text-gray-500 mt-1">
            You can select multiple PDFs to combine into one.
          </p>

          {files.length > 0 && (
            <div className="mt-4 bg-white shadow rounded-lg p-4" aria-live="polite">
              <h3 className="font-semibold mb-2 text-gray-800">
                Selected Files ({files.length})
              </h3>
              <ul className="space-y-1 max-h-40 overflow-y-auto text-sm text-gray-600">
                {files.map((f, i) => (
                  <li key={i} className="truncate">{f.name}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={handleMerge}
            disabled={loading}
            aria-label="Merge selected PDF files"
            className="mt-6 w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Compressing & Merging..." : "Merge PDFs"}
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-green-700">
            ✅ Merge Completed!
          </h2>
          <p className="text-gray-600 mb-6">
            Your merged PDF is ready. Click below to download it.
          </p>

          {/* ✅ Mobile-friendly, same-tab download */}
          <button
            onClick={handleDownload}
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Download PDF
          </button>

          <button
            onClick={handleReset}
            className="mt-6 block mx-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Merge Another Batch
          </button>
        </div>
      )}
    </div>
  );
}
