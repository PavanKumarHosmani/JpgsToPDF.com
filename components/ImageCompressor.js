"use client";

import { useState } from "react";
import ProgressBar from "./ui/ProgressBar";

export default function ImageCompressor() {
  const [files, setFiles] = useState(null);
  const [targetSize, setTargetSize] = useState(200);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => setFiles(e.target.files);

  const handleUploadAndCompress = async () => {
    if (!files || files.length === 0) return;
    setLoading(true);
    setProgress(10);

    try {
      // 1️⃣ Request upload URLs
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/image/upload-urls`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileCount: files.length }),
        }
      );
      const { operationId, uploadUrls } = await res.json();
      setProgress(30);

      // 2️⃣ Upload + compress each file
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const { fileKey, url } = uploadUrls[i];

        // Upload to S3
        await fetch(url, {
          method: "PUT",
          headers: { "Content-Type": file.type },
          body: file,
        });

        // Trigger compression
        const compressRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/image/compress/start`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              operationId,
              fileKey,
              targetSizeKb: targetSize,
            }),
          }
        );

        const { downloadUrl } = await compressRes.json();

        // Auto-download compressed file
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = file.name.replace(/\.(?=[^.]+$)/, "-compressed.");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      setProgress(100);
    } catch (err) {
      console.error("Compression error", err);
      alert("Something went wrong!");
    } finally {
      setTimeout(() => setProgress(0), 2000); // reset after a short delay
      setLoading(false);
    }
  };

  return (
    <div className="p-6 border rounded-2xl shadow-lg bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Compress Your Images
      </h2>

      {/* File Input */}
      <label className="block mb-2 font-medium text-gray-700">
        Select Images
      </label>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 block w-full border rounded-lg cursor-pointer 
                   px-3 py-2 text-gray-700 
                   file:mr-4 file:py-2 file:px-4 
                   file:rounded-full file:border-0 
                   file:text-sm file:font-semibold 
                   file:bg-blue-50 file:text-blue-600 
                   hover:file:bg-blue-100"
      />

      {/* Target Size Input */}
      <label className="block mb-2 font-medium text-gray-700">
        Target Size (KB)
      </label>
      <input
        type="number"
        value={targetSize}
        onChange={(e) => setTargetSize(Number(e.target.value))}
        className="border px-4 py-2 rounded-lg mb-4 block w-full shadow-sm 
                   focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="e.g. 200"
      />

      {/* Button */}
      <button
        onClick={handleUploadAndCompress}
        disabled={loading}
        className={`w-full px-6 py-3 rounded-full font-semibold shadow-md transition-all 
          ${loading
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
          }`}
      >
        {loading ? "Compressing..." : "Upload & Compress"}
      </button>

      {/* Progress Bar */}
      {progress > 0 && <ProgressBar value={progress} />}
    </div>
  );
}
