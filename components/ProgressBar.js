"use client";

import { useState } from "react";
import axios from "axios";
import ProgressBar from "./ProgressBar";

export default function UploadForm() {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (files.length === 0) return alert("Please select files");

    setLoading(true);
    setProgress(0);

    try {
      // Get presigned URLs from backend
      const res = await axios.post("http://localhost:8080/api/v1/upload-urls", {
        fileCount: files.length
      });
      const { uploadUrls, operationId } = res.data;

      // Upload files
      for (let i = 0; i < files.length; i++) {
        await axios.put(uploadUrls[i].url, files[i], {
          headers: { "Content-Type": files[i].type },
          onUploadProgress: (e) => {
            const percent = Math.round((e.loaded * 100) / e.total);
            setProgress(Math.round(((i + percent / 100) / files.length) * 100));
          }
        });
      }

      // Start conversion
      const convertRes = await axios.post("http://localhost:8080/api/v1/convert/start", {
        operationId,
        fileKeys: uploadUrls.map(u => u.fileKey)
      });

      setDownloadUrl(convertRes.data.downloadUrl);
    } catch (err) {
      console.error(err);
      alert("Conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => setFiles(Array.from(e.target.files))}
        disabled={loading}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mt-3 disabled:opacity-50"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Converting..." : "Convert to PDF"}
      </button>

      {progress > 0 && <ProgressBar value={progress} />}

      {downloadUrl && (
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
