"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry"; // works with pdfjs-dist@3.11.174

export default function MergePdf() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFiles(Array.from(e.target.files));

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
    const pdfDoc = await PDFDocument.load(data);
    const compressed = await pdfDoc.save({ useObjectStreams: true });
    const out = new File([compressed], file.name, { type: "application/pdf" });
    console.log(`⚙️ ${file.name}: ${(file.size / 1024 / 1024).toFixed(2)} MB → ${(out.size / 1024 / 1024).toFixed(2)} MB`);
    return out;
  };

  // 🔥 High compression via image downsampling
  const compressHigh = async (file) => {
    const data = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data }).promise;
    const newPdf = await PDFDocument.create();
    const scale = 0.55;   // 50–60% DPI
    const quality = 0.75; // JPEG quality
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
    console.log(`🖼️ ${file.name}: ${(file.size / 1024 / 1024).toFixed(2)} MB → ${(out.size / 1024 / 1024).toFixed(2)} MB`);
    return out;
  };

  // 🧠 Auto decide compression mode
  const compressSmart = async (file) => {
    try {
      const data = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(data);
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

      // 4️⃣ Auto-download merged file
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "merged.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Merge failed:", err);
      alert("Merge failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 border rounded-lg shadow-md bg-white max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Smart Merge & Auto-Compress PDFs</h2>

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

      <button
        onClick={handleMerge}
        disabled={loading}
        className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Compressing & Merging..." : "Merge PDFs"}
      </button>
    </div>
  );
}
