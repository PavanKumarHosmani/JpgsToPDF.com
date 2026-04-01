"use client";

import { useState } from "react";
import axios from "axios";

export default function UnlockPdf() {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [toast, setToast] = useState("");
  const [progress, setProgress] = useState(0);

  const showToast = (msg, duration = 3000) => {
    setToast(msg);
    setTimeout(() => setToast(""), duration);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files?.[0] || null);
    setDownloadUrl(null);
  };

  const handleUnlock = async () => {
    if (!file) return showToast("⚠️ Please select a PDF file");
    if (!password) return showToast("⚠️ Enter password");

    setLoading(true);

    try {
      const { data: urlData } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/upload-urls`,
        { fileCount: 1 }
      );

      const { operationId, uploadUrls } = urlData;
      const { fileKey, url } = uploadUrls[0];

      await axios.put(url, file, {
        headers: { "Content-Type": "application/pdf" },
        onUploadProgress: (e) => {
          const percent = Math.round((e.loaded * 100) / e.total);
          setProgress(percent);
        },
      });

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/pdf/unlock/start`,
        { operationId, fileKey, password }
      );

      if (data.error) {
        throw new Error(data.error);
      }

      setDownloadUrl(data.downloadUrl);
      showToast("✅ PDF Unlocked!");
    } catch (err) {
      showToast("❌ Wrong password or failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    showToast("📥 Downloading...");
    const res = await fetch(downloadUrl);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "unlocked.pdf";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-xl bg-white border border-gray-200">
      
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm">
          {toast}
        </div>
      )}

      {!downloadUrl ? (
        <>
          {/* Title */}
          <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
            🔓 Unlock Your PDF
          </h2>

          {/* Upload Box */}
          <label className="block border-2 border-dashed border-blue-300 rounded-xl p-6 text-center cursor-pointer hover:bg-blue-50 transition">
            <p className="text-gray-600">
              Drag & drop PDF or <span className="text-blue-600 font-semibold">browse</span>
            </p>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* File Name */}
          {file && (
            <p className="mt-3 text-sm text-gray-500 truncate">
              📄 {file.name}
            </p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Enter PDF password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-4 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Progress */}
          {loading && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-center mt-1">{progress}%</p>
            </div>
          )}

          {/* Button */}
          <button
            onClick={handleUnlock}
            disabled={loading}
            className="w-full mt-5 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Unlocking..." : "Unlock PDF"}
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold text-green-600 mb-3">
            ✅ PDF Unlocked!
          </h2>

          <button
            onClick={handleDownload}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Download PDF
          </button>

          <button
            onClick={() => {
              setFile(null);
              setPassword("");
              setDownloadUrl(null);
            }}
            className="block mt-4 mx-auto text-blue-600 underline"
          >
            Unlock another file
          </button>
        </div>
      )}
    </div>
  );
}