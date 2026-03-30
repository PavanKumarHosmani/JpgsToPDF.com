"use client";

import { useState } from "react";
import ProgressBar from "./ui/ProgressBar";

export default function ImageCompressor() {
  const [files, setFiles] = useState(null);
  const [targetSize, setTargetSize] = useState(200);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadLinks, setDownloadLinks] = useState([]);
  const [toast, setToast] = useState("");

  const showToast = (msg, duration = 3000) => {
    setToast(msg);
    setTimeout(() => setToast(""), duration);
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
    setDownloadLinks([]);
  };

  const handleUploadAndCompress = async () => {
    if (!files || files.length === 0) return;
  setLoading(true);
  setProgress(10);

  try {
    // ❌ Removed: browser-image-compression import

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

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const { url, fileKey } = uploadUrls[i];

      // ❌ Removed compression logic
      // ✅ Use original file directly
      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });

      setProgress(40 + ((i + 1) / files.length) * 30);

      // ✅ Keep backend compression call as-is
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

  const handleDownload = async (file) => {
    try {
      showToast(`📥 Downloading ${file.name}...`);
      const res = await fetch(file.url);
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = file.name;
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
    setFiles(null);
    setDownloadLinks([]);
    setTargetSize(200);
    setProgress(0);
  };

  return (
    <div className="relative p-6 border rounded-2xl shadow-lg bg-white max-w-lg mx-auto transition-all duration-300">
      {/* ✅ Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50 animate-fadeIn">
          {toast}
        </div>
      )}

      {!downloadLinks.length ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Upload Images to Compress
          </h2>

          <label
            htmlFor="fileInput"
            className="block mb-2 font-medium text-gray-800"
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
                       px-3 py-2 text-gray-800 
                       file:mr-4 file:py-2 file:px-4 
                       file:rounded-full file:border-0 
                       file:text-sm file:font-semibold 
                       file:bg-blue-50 file:text-blue-700 
                       hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p id="fileInputDesc" className="text-sm text-gray-700 mb-4">
            Supports JPG, PNG, and WebP formats.
          </p>

          <label
            htmlFor="targetSize"
            className="block mb-2 font-medium text-gray-800"
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
                       text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            placeholder="e.g. 200"
          />

          <button
            onClick={handleUploadAndCompress}
            disabled={loading}
            aria-label="Compress and upload selected images"
            className={`w-full px-6 py-3 rounded-full font-semibold shadow-md transition-all 
              ${
                loading
                  ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                  : "bg-blue-700 text-white hover:bg-blue-800 active:scale-95"
              }`}
          >
            {loading ? "Compressing..." : "Compress"}
          </button>

          {progress > 0 && <ProgressBar value={progress} />}
        </>
      ) : (
        <>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 text-green-700">
              ✅ Compression Completed!
            </h2>
            <p className="text-gray-800 mb-6">
              Your images are ready. Click below to download them.
            </p>

            <div className="space-y-3">
              {downloadLinks.map((file, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100"
                >
                  <span className="truncate text-gray-800">{file.name}</span>
                  <button
                    onClick={() => handleDownload(file)}
                    className="bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-800 transition"
                    aria-label={`Download ${file.name}`}
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleReset}
              className="mt-8 bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-800 transition"
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
