"use client";

import { useState } from "react";
import axios from "axios";

export default function ImageToPdf() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [toast, setToast] = useState("");

  const showToast = (msg, duration = 3000) => {
    setToast(msg);
    setTimeout(() => setToast(""), duration);
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files || []));
    setDownloadUrl(null);
  };

  const handleConvert = async () => {
    if (!files.length) return alert("Please select image files.");
    setLoading(true);

    try {
      // 1️⃣ Request presigned URLs
      const { data: urlData } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/upload-urls`,
        { fileCount: files.length }
      );
      const { operationId, uploadUrls } = urlData;

      // 2️⃣ Upload files in parallel
      await Promise.all(
        uploadUrls.map((u, i) =>
          axios.put(u.url, files[i], {
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
      showToast("✅ Conversion completed!");
    } catch (err) {
      console.error(err);
      alert("Conversion failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!downloadUrl) return;
    showToast("📥 Download started...");
    const res = await fetch(downloadUrl);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = "converted.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(blobUrl);

    showToast("✅ Download complete!");
  };

  const handleReset = () => {
    setFiles([]);
    setDownloadUrl(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-xl shadow bg-white transition-all duration-300">
      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm z-50">
          {toast}
        </div>
      )}

      {!downloadUrl ? (
        <>
          <label htmlFor="file-upload" className="block mb-2 font-medium text-gray-700">
            Select image files to convert
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-600 hover:file:bg-green-100 cursor-pointer"
          />
          {files.length > 0 && (
            <ul className="mt-4 max-h-40 overflow-y-auto text-sm text-gray-600">
              {files.map((f) => (
                <li key={f.name} className="truncate">{f.name}</li>
              ))}
            </ul>
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
          <h2 className="text-2xl font-bold mb-2 text-green-700">✅ Conversion Completed!</h2>
          <p className="text-gray-600 mb-6">Your PDF is ready. Click below to download it.</p>

          <button
            onClick={handleDownload}
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Download PDF
          </button>

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
