"use client";

import { useState } from "react";

export default function MergePdf() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files));
  };

    const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };
  
  const handleMerge = async () => {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files.");
      return;
    }

    setLoading(true);
    try {
      // 1️⃣ Request upload URLs
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/pdf/upload-urls`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileCount: files.length }),
        }
      );

      const { operationId, uploadUrls } = await res.json();

      // 2️⃣ Upload each file to S3
      for (let i = 0; i < files.length; i++) {
        await fetch(uploadUrls[i].url, {
          method: "PUT",
          headers: { "Content-Type": "application/pdf" },
          body: files[i],
        });
      }

      // 3️⃣ Trigger merge
      const fileKeys = uploadUrls.map((u) => u.fileKey);
      const mergeRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/pdf/merge/start`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ operationId, fileKeys }),
        }
      );

      const { downloadUrl } = await mergeRes.json();

      // 4️⃣ Auto-download merged PDF
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
      <h2 className="text-xl font-semibold mb-4">Merge Your PDFs</h2>

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
                   hover:file:bg-green-100
                   cursor-pointer"
      />

      <button
        onClick={handleMerge}
        disabled={loading}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Merging..." : "Merge PDFs"}
      </button>
    </div>
  );
}
