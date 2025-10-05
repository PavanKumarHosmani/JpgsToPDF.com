"use client";

import { useState } from "react";

export default function ImageToPdf() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      alert("Please select image files.");
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ Ask backend for presigned URLs
      const urlRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/upload-urls`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileCount: files.length }),
      });
      const { operationId, uploadUrls } = await urlRes.json();

      // 2️⃣ Upload images to S3
      for (let i = 0; i < files.length; i++) {
        await fetch(uploadUrls[i].url, {
          method: "PUT",
          headers: { "Content-Type": files[i].type || "application/octet-stream" },
          body: files[i],
        });
      }

      // 3️⃣ Trigger conversion
      const fileKeys = uploadUrls.map((u) => u.fileKey);
      const convRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/convert/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ operationId, fileKeys }),
      });
      const { downloadUrl } = await convRes.json();

      // 4️⃣ Auto-download the result
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "converted.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error(err);
      alert("Conversion failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-xl shadow bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Convert Images to PDF
      </h2>

      {/* Upload box */}
      {/* <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
      >
        <span className="text-3xl mb-2">📤</span>
        <p className="text-gray-700 font-medium">Click to select image files</p>
        <p className="text-sm text-gray-500">Supports JPG, PNG, WebP</p>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </label> */}

      <input
          id="file-upload"
          type="file"
          accept="image/*"
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
        onClick={handleConvert}
        disabled={loading}
        className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Converting..." : "Convert & Download PDF"}
      </button>
    </div>
  );
}
