"use client";

import { useState } from "react";

export default function PdfToJpg() {
  const [files, setFiles] = useState([]);
  const [downloading, setDownloading] = useState(false);

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      alert("Please select PDF files first.");
      return;
    }

    setDownloading(true);

    try {
      // 1️⃣ Request upload URLs
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/pdf-to-jpg/upload-urls`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileCount: files.length }),
        }
      );

      const { operationId, uploadUrls } = await res.json();

      // 2️⃣ Upload each file to S3
      for (let i = 0; i < files.length; i++) {
        await fetch(uploadUrls[i].uploadUrl, {
          method: "PUT",
          headers: { "Content-Type": "application/pdf" },
          body: files[i],
        });
      }

      // 3️⃣ Trigger conversion
      const fileKeys = uploadUrls.map((u) => u.fileKey);
      const convRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/pdf/to-jpg/batch`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ operationId, fileKeys }),
        }
      );

      const { results } = await convRes.json();

      // 4️⃣ Auto-download each ZIP
      results.forEach(({ fileKey, downloadUrl }) => {
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = fileKey.split("/").pop(); // e.g. filename.zip
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } catch (err) {
      console.error("Conversion failed:", err);
      alert("Conversion failed, check console.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="p-8 border rounded-lg shadow-md bg-white max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Convert PDFs to JPG</h2>

      <input
        type="file"
        accept="application/pdf"
        multiple
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-700 
                   file:mr-4 file:py-2 file:px-4 
                   file:rounded-full file:border-0 
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-600
                   hover:file:bg-blue-100
                   cursor-pointer"
      />

      <button
        onClick={handleConvert}
        disabled={downloading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {downloading ? "Converting..." : "Convert to JPG"}
      </button>
    </div>
  );
}
