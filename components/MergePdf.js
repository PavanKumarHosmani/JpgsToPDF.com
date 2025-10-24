"use client";

import { useState } from "react";

export default function MergePdf() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null); // ✅ Show after merge
  const [pdfLib, setPdfLib] = useState(null);
  const [pdfjs, setPdfjs] = useState(null);

  // ✅ Load PDF libraries only when needed (when user selects files)
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
      await import("pdfjs-dist/build/pdf.worker.entry"); // worker for pdfjs
      setPdfLib({ PDFDocument });
      setPdfjs(pdfjsLib);
      console.log("✅ PDF libraries loaded on demand");
    }
  };

  // 🧩 Detect if PDF likely image-heavy
  const isImageHeavy = (pdfDoc) => {
    try {
      const pages = pdfDoc.getPages();
      let imagePages = 0;
      for (const page of pages) {
        const { xObjectNames } = page.node;
        if (xObjectNames && xObjectNames.size > 0) imagePages++;
      }
      return imagePages / pages.length > 0.3; // >30% pages have images
    } catch {
      return false;
    }
  };

  // ⚡ Fast structural compression
  const compressStandard = async (file) => {
    const data = await file.arrayBuffer();
    const pdfDoc = await pdfLib.PDFDocument.load(data);
    const compressed = await pdfDoc.save({ useObjectStreams: true });
    const out = new File([compressed], file.name, { type: "application/pdf" });
    console.log(
      `⚙️ ${file.name}: ${(file.size / 1024 / 1024).toFixed(2)} MB → ${(out.size / 1024 / 1024).toFixed(2)} MB`
    );
    return out;
  };

  // 🔥 High compression via image downsampling
  const compressHigh = async (file) => {
    const data = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data }).promise;
    const newPdf = await pdfLib.PDFDocument.create();
    const scale = 0.55; // ~50-60% DPI
    const quality = 0.75;
    const total = pdf.numPages;

    for (let i = 1; i <= total; i++) {
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
    const out = new File([bytes], file.name, { type: "application/pdf" });
    console.log(
      `🖼️ ${file.name}: ${(file.size / 1024 / 1024).toFixed(2)} MB → ${(out.size / 1024 / 1024).toFixed(2)} MB`
    );
    return out;
  };

  // 🧠 Auto decide compression mode
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

  // 🔗 Merge flow
  const handleMerge = async () => {
    if (files.length < 2) return alert("Please select at least 2 PDF files.");
    if (!pdfLib || !pdfjs) return alert("PDF libraries are still loading...");
    setLoading(true);

    try {
      // 1️⃣ Presigned upload URLs
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/pdf/upload-urls`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileCount: files.length }),
      });
      const { operationId, uploadUrls } = await res.json();

      // 2️⃣ Compress + upload
      for (let i = 0; i < files.length; i++) {
        const compressed = await compressSmart(files[i]);
        await fetch(uploadUrls[i].url, {
          method: "PUT",
          headers: { "Content-Type": "application/pdf" },
          body: compressed,
        });
      }

      // 3️⃣ Trigger merge
      const fileKeys = uploadUrls.map((u) => u.fileKey);
      const mergeRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/pdf/merge/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ operationId, fileKeys }),
      });
      const { downloadUrl } = await mergeRes.json();

      // ✅ 4️⃣ Show download button instead of auto-download
      setDownloadUrl(downloadUrl);
    } catch (err) {
      console.error("Merge failed:", err);
      alert("Merge failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFiles([]);
    setDownloadUrl(null);
  };

  return (
    <div className="p-8 border rounded-lg shadow-md bg-white max-w-lg mx-auto transition-all duration-300">
      {!downloadUrl ? (
        <>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Smart Merge & Auto-Compress PDFs
          </h2>

          <input
            type="file"
            accept="application/pdf"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 
                       file:mr-4 file:py-2 file:px-4 
                       file:rounded-full file:border-0 
                       file:text-sm file:font-semibold
                       file:bg-green-50 file:text-green-600
                       hover:file:bg-green-100 cursor-pointer"
          />

          {files.length > 0 && (
            <div className="mt-4 bg-white shadow rounded-lg p-4">
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
            className="mt-6 w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Compressing & Merging..." : "Merge PDFs"}
          </button>
        </>
      ) : (
        <>
          {/* ✅ Merge Completed View */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 text-green-700">
              ✅ Merge Completed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your merged PDF is ready. Click below to download it.
            </p>

            <a
              href={downloadUrl}
              download="merged.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Download PDF
            </a>
          </div>
        </>
      )}
    </div>
  );
}
