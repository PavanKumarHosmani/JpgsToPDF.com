"use client";

import { useState } from "react";

export default function ImageToPdf() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
    setDownloadUrl(null);
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      alert("Please select image files.");
      return;
    }

    setLoading(true);

    try {
      // ✅ Load image compression library only when user uploads
      const { default: imageCompression } = await import("browser-image-compression");

      // 1️⃣ Ask backend for presigned URLs
      const urlRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/upload-urls`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileCount: files.length }),
      });

      const { operationId, uploadUrls } = await urlRes.json();

      // 2️⃣ Compress & upload each image
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const options = {
          maxSizeMB: 2,
          maxWidthOrHeight: 2500,
          useWebWorker: true,
          initialQuality: 0.85,
        };

        console.log(`Compressing ${file.name}...`);
        const compressedFile = await imageCompression(file, options);

        await fetch(uploadUrls[i].url, {
          method: "PUT",
          headers: { "Content-Type": file.type || "application/octet-stream" },
          body: compressedFile,
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

      // 4️⃣ Show download link
      setDownloadUrl(downloadUrl);
    } catch (err) {
      console.error(err);
      alert("Conversion failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFiles([]);
    setDownloadUrl(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-xl shadow bg-white transition-all duration-300">
      {!downloadUrl ? (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Convert Images to PDF
          </h2>

          {/* ✅ Add accessible label for file input */}
          <label
            htmlFor="file-upload"
            className="block mb-2 font-medium text-gray-700"
          >
            Select image files to convert
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            aria-describedby="file-help"
            className="block w-full text-sm text-gray-700 
              file:mr-4 file:py-2 file:px-4 
              file:rounded-full file:border-0 
              file:text-sm file:font-semibold
              file:bg-green-50 file:text-green-600
              hover:file:bg-green-100
              cursor-pointer"
          />
          <p id="file-help" className="text-sm text-gray-500 mt-1">
            Supports JPG, PNG, and WebP formats.
          </p>

          {files.length > 0 && (
            <div
              className="mt-4 bg-white shadow rounded-lg p-4"
              aria-live="polite"
            >
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
            aria-label="Convert selected images to PDF"
            className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Converting..." : "Convert to PDF"}
          </button>
        </>
      ) : (
        <>
          {/* ✅ Conversion Completed View */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 text-green-700">
              ✅ Conversion Completed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your PDF is ready. Click below to download it.
            </p>

            <a
              href={downloadUrl}
              download="converted.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
              aria-label="Download converted PDF file"
            >
              Download PDF
            </a>

            <button
              onClick={handleReset}
              className="mt-6 block mx-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              aria-label="Convert more images"
            >
              Convert Another Batch
            </button>
          </div>
        </>
      )}
    </div>
  );
}
