"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";
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
      // 1️⃣ Get presigned upload URLs
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/image/upload-urls`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileCount: files.length }),
        }
      );

      if (!res.ok) throw new Error("Failed to get upload URLs");

      const { operationId, uploadUrls } = await res.json();
      setProgress(25);

      // 2️⃣ Compress locally & upload
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const { url, fileKey } = uploadUrls[i];

        const options = {
          maxSizeMB: targetSize / 1024, // convert KB to MB
          maxWidthOrHeight: 2500,
          useWebWorker: true,
          initialQuality: 0.8,
        };

        const compressedFile = await imageCompression(file, options);

        console.log(
          `📉 ${file.name}: ${(file.size / 1024).toFixed(0)} KB → ${(compressedFile.size / 1024).toFixed(0)} KB`
        );

        // 3️⃣ Upload to S3
        await fetch(url, {
          method: "PUT",
          headers: { "Content-Type": compressedFile.type },
          body: compressedFile,
        });

        setProgress(40 + ((i + 1) / files.length) * 30);

        // 4️⃣ Ask backend to start compression & return download URL
        const compressRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/image/compress/start`,
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

        if (!compressRes.ok) throw new Error("Compression failed on backend");

        const { downloadUrl } = await compressRes.json();

        // 5️⃣ Auto-download the result
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = file.name.replace(/\.(?=[^.]+$)/, "-compressed.");
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log(`✅ Download triggered for ${file.name}`);
      }

      setProgress(100);
      alert("✅ All images compressed and downloaded!");
    } catch (err) {
      console.error("Compression error", err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setProgress(0), 2000);
      setLoading(false);
    }
  };

  return (
    <div className="p-6 border rounded-2xl shadow-lg bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Compress & Upload Images
      </h2>

      <label className="block mb-2 font-medium text-gray-700">Select Images</label>
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

      <button
        onClick={handleUploadAndCompress}
        disabled={loading}
        className={`w-full px-6 py-3 rounded-full font-semibold shadow-md transition-all 
          ${
            loading
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
          }`}
      >
        {loading ? "Compressing..." : "Compress & Upload"}
      </button>

      {progress > 0 && <ProgressBar value={progress} />}
    </div>
  );
}
