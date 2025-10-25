"use client";

import { useState } from "react";

export default function ImageToPdf() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files || []));
    setDownloadUrl(null);
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      alert("Please select image files.");
      return;
    }

    setLoading(true);
    try {
      // ✅ Dynamically import image-compression only now
      const { default: imageCompression } = await import(
        /* webpackChunkName: "img-compression" */
        "browser-image-compression"
      );

      // ✅ Parallel compression using Promise.all → uses Web Workers internally
      const compressedFiles = await Promise.all(
        files.map(async (file) => {
          const options = {
            maxSizeMB: 2,
            maxWidthOrHeight: 2500,
            useWebWorker: true,
            initialQuality: 0.85,
          };
          return imageCompression(file, options);
        })
      );

      // ✅ Lazy-load axios only when uploading
      const { default: axios } = await import("axios");

      // 1️⃣ Request presigned upload URLs
      const { data: urlData } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/upload-urls`,
        { fileCount: files.length }
      );

      const { operationId, uploadUrls } = urlData;

      // 2️⃣ Upload all files in parallel
      await Promise.all(
        uploadUrls.map((u, i) =>
          axios.put(u.url, compressedFiles[i], {
            headers: { "Content-Type": files[i].type || "application/octet-stream" },
          })
        )
      );

      // 3️⃣ Start conversion
      const { data: convData } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/convert/start`,
        {
          operationId,
          fileKeys: uploadUrls.map((u) => u.fileKey),
        }
      );

      setDownloadUrl(convData.downloadUrl);
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

          <label htmlFor="file-upload" className="block mb-2 font-medium text-gray-700">
            Select image files to convert
          </label>
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
          <p id="file-help" className="text-sm text-gray-500 mt-1">
            Supports JPG, PNG, and WebP formats.
          </p>

          {files.length > 0 && (
            <div className="mt-4 bg-white shadow rounded-lg p-4" aria-live="polite">
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
            {loading ? "Converting..." : "Convert to PDF"}
          </button>
        </>
      ) : (
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
          >
            Download PDF
          </a>

          <button
            onClick={handleReset}
            className="mt-6 block mx-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Convert Another Batch
          </button>
        </div>
      )}
    </div>
  );
}
