"use client";

import { useState } from "react";

export default function MergePdf() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [toast, setToast] = useState("");

  const showToast = (msg, duration = 3000) => {
    setToast(msg);
    setTimeout(() => setToast(""), duration);
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
    setDownloadUrl(null);
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files.");
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ Ask backend for upload URLs
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/pdf/upload-urls`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileCount: files.length }),
        }
      );

      const { operationId, uploadUrls } = await res.json();

      // 2️⃣ Upload files AS-IS (no compression)
      for (let i = 0; i < files.length; i++) {
        await fetch(uploadUrls[i].url, {
          method: "PUT",
          headers: { "Content-Type": "application/pdf" },
          body: files[i],
        });
      }

      // 3️⃣ Start merge
      const mergeRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/pdf/merge/start`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            operationId,
            fileKeys: uploadUrls.map((u) => u.fileKey),
          }),
        }
      );

      const { downloadUrl } = await mergeRes.json();
      setDownloadUrl(downloadUrl);
    } catch (err) {
      console.error("Merge failed:", err);
      alert("Merge failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      showToast("📥 Download started...");
      const res = await fetch(downloadUrl);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "merged.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);

      showToast("✅ Download complete!");
    } catch (err) {
      console.error(err);
      showToast("❌ Download failed!");
    }
  };

  const handleReset = () => {
    setFiles([]);
    setDownloadUrl(null);
  };

  return (
    <div className="relative p-8 border rounded-lg shadow-md bg-white max-w-lg mx-auto">
      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm z-50">
          {toast}
        </div>
      )}

      {!downloadUrl ? (
        <>
          <label className="block mb-2 font-medium text-gray-800">
            Select PDF files to merge
          </label>

          <input
            type="file"
            accept="application/pdf"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-800 cursor-pointer"
          />

          {files.length > 0 && (
            <div className="mt-4 p-4 border rounded">
              <p className="font-semibold mb-2">
                Selected Files ({files.length})
              </p>
              <ul className="text-sm space-y-1">
                {files.map((f, i) => (
                  <li key={i} className="truncate">
                    {f.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={handleMerge}
            disabled={loading}
            className="mt-6 w-full bg-green-700 text-white py-3 rounded disabled:opacity-50"
          >
            {loading ? "Merging..." : "Merge PDFs"}
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold text-green-700 mb-4">
            ✅ Merge Completed
          </h2>

          <button
            onClick={handleDownload}
            className="bg-green-700 text-white px-6 py-3 rounded"
          >
            Download PDF
          </button>

          <button
            onClick={handleReset}
            className="block mt-4 mx-auto bg-blue-700 text-white px-6 py-3 rounded"
          >
            Merge Another Batch
          </button>
        </div>
      )}
    </div>
  );
}
