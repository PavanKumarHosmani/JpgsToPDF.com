"use client";

import { useState, useRef } from "react";
import axios from "axios";
import ProgressBar from "./ProgressBar";

export default function UploadForm({ autoDownload = true }) {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
    setDownloadUrl("");
    setProgress(0);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleUpload = async () => {
    if (files.length === 0) return alert("Please select files");
    setLoading(true);
    setProgress(0);

    try {
      // Request presigned URLs
      const res = await axios.post(`${API_BASE_URL}/api/v1/upload-urls`, {
        fileCount: files.length,
      });
      const { uploadUrls, operationId } = res.data;

      // Upload each file
      for (let i = 0; i < files.length; i++) {
        await axios.put(uploadUrls[i].url, files[i], {
          headers: { "Content-Type": files[i].type },
          onUploadProgress: (e) => {
            const percent = Math.round((e.loaded * 100) / e.total);
            setProgress(
              Math.round(((i + percent / 100) / files.length) * 100)
            );
          },
        });
      }

      // Start conversion
      const convertRes = await axios.post(`${API_BASE_URL}/api/v1/convert/start`, {
        operationId,
        fileKeys: uploadUrls.map((u) => u.fileKey),
      });

      setDownloadUrl(convertRes.data.downloadUrl);

      // Auto download if enabled
      if (autoDownload) {
        const link = document.createElement("a");
        link.href = convertRes.data.downloadUrl;
        link.download = "converted.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.error(err);
      alert("Conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
      {/* Custom Choose Files Button */}
      <button
        type="button"
        onClick={() => fileInputRef.current.click()}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full mb-2 hover:bg-blue-700"
      >
        Choose Files
      </button>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />

      {/* File list */}
      {files.length > 0 && (
        <div className="mb-3">
          <h4 className="font-semibold mb-1">Selected Files:</h4>
          <ul className="list-disc pl-5 space-y-1 max-h-40 overflow-auto">
            {files.map((file, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <span>{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="text-red-500 hover:underline ml-2"
                  disabled={loading}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Convert button */}
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mt-3 disabled:opacity-50 w-full hover:bg-green-700"
        onClick={handleUpload}
        disabled={loading || files.length === 0}
      >
        {loading ? "Converting..." : "Convert to PDF"}
      </button>

      {/* Progress bar */}
      {progress > 0 && <ProgressBar value={progress} />}

      {/* Manual download link if autoDownload = false */}
      {!autoDownload && downloadUrl && (
        <a
          href={downloadUrl}
          download="converted.pdf"
          className="block mt-4 text-blue-800 underline"
        >
          ⬇ Download PDF
        </a>
      )}
    </div>
  );
}
