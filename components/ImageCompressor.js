"use client";

import { useState } from "react";
import ProgressBar from "./ui/ProgressBar";

export default function ImageCompressor() {
  const [files, setFiles] = useState(null);
  const [targetSize, setTargetSize] = useState(200);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadLinks, setDownloadLinks] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
    setDownloadLinks([]);
  };

  const handleUploadAndCompress = async () => {
    if (!files || files.length === 0) return;
    setLoading(true);
    setProgress(10);

    try {
      // ✅ Dynamically import compression library only when needed
      const { default: imageCompression } = await import("browser-image-compression");

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

      const newDownloadLinks = [];

      // 2️⃣ Compress locally & upload
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const { url, fileKey } = uploadUrls[i];

        const options = {
          maxSizeMB: targetSize / 1024,
          maxWidthOrHeight: 2500,
          useWebWorker: true,
          initialQuality: 0.8,
        };

        console.log(`Compressing ${file.name}...`);
        const compressedFile = await imageCompression(file, options);

        console.log(
          `📉 ${file.name}: ${(file.size / 1024).toFixed(0)} KB → ${(compressedFile.size / 1024).toFixed(0)} KB`
        );

        await fetch(url, {
          method: "PUT",
          headers: { "Content-Type": compressedFile.type },
          body: compressedFile,
        });

        setProgress(40 + ((i + 1) / files.length) * 30);

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

        newDownloadLinks.push({
          name: file.name.replace(/\.(?=[^.]+$)/, "-compressed."),
          url: downloadUrl,
        });
      }

      setDownloadLinks(newDownloadLinks);
      setProgress(100);
    } catch (err) {
      console.error("Compression error", err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setProgress(0), 2000);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFiles(null);
    setDownloadLinks([]);
    setTargetSize(200);
    setProgress(0);
  };

  return (
    <div className="p-6 border rounded-2xl shadow-lg bg-white max-w-lg mx-auto transition-all duration-300">
      {!downloadLinks.length ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Compress & Upload Images
          </h2>

          <label
            htmlFor="fileInput"
            className="block mb-2 font-medium text-gray-700"
          >
            Select Images
          </label>
          <input
            id="fileInput"
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            aria-describedby="fileInputDesc"
            className="mb-4 block w-full border rounded-lg cursor-pointer 
                       px-3 py-2 text-gray-700 
                       file:mr-4 file:py-2 file:px-4 
                       file:rounded-full file:border-0 
                       file:text-sm file:font-semibold 
                       file:bg-blue-50 file:text-blue-600 
                       hover:file:bg-blue-100"
          />
          <p id="fileInputDesc" className="text-sm text-gray-500 mb-4">
            Supports JPG, PNG, and WebP formats.
          </p>

          <label
            htmlFor="targetSize"
            className="block mb-2 font-medium text-gray-700"
          >
            Target Size (KB)
          </label>
          <input
            id="targetSize"
            type="number"
            value={targetSize}
            onChange={(e) => setTargetSize(Number(e.target.value))}
            aria-label="Enter desired output file size in kilobytes"
            className="border px-4 py-2 rounded-lg mb-4 block w-full shadow-sm 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="e.g. 200"
          />

          <button
            onClick={handleUploadAndCompress}
            disabled={loading}
            aria-label="Compress and upload selected images"
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
        </>
      ) : (
        <>
          {/* ✅ Compression Completed View */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 text-green-700">
              ✅ Compression Completed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your images are ready. Click below to download them.
            </p>

            <div className="space-y-3">
              {downloadLinks.map((file, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100"
                >
                  <span className="truncate text-gray-700">{file.name}</span>
                  <a
                    href={file.url}
                    download={file.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    aria-label={`Download ${file.name}`}
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>

            <button
              onClick={handleReset}
              className="mt-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
              aria-label="Compress another batch of images"
            >
              Compress Another Batch
            </button>
          </div>
        </>
      )}
    </div>
  );
}
