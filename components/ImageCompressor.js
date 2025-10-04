import { useState } from "react";

export default function ImageCompressor() {
  const [files, setFiles] = useState(null);
  const [targetSize, setTargetSize] = useState(200);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUploadAndCompress = async () => {
    if (!files || files.length === 0) return;
    setLoading(true);

    try {
      // 1. Get presigned upload URLs
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/image/upload-urls`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileCount: files.length }),
      });
      const { operationId, uploadUrls } = await res.json();

      // 2. Upload + compress each file
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const { fileKey, url } = uploadUrls[i];

        // Upload to S3
        await fetch(url, {
          method: "PUT",
          headers: { "Content-Type": file.type },
          body: file,
        });

        // Trigger compression
        const compressRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/image/compress/start`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            operationId,
            fileKey,
            targetSizeKb: targetSize,
          }),
        });

        const { downloadUrl } = await compressRes.json();

        // Direct browser download
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = file.name.replace(/\.(?=[^.]+$)/, "-compressed.");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } catch (err) {
      console.error("Compression error", err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Compress Your Images</h2>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 block"
      />

      <input
        type="number"
        value={targetSize}
        onChange={(e) => setTargetSize(Number(e.target.value))}
        className="border px-2 py-1 mb-4 block w-full"
        placeholder="Target size in KB"
      />

      <button
        onClick={handleUploadAndCompress}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        {loading ? "Compressing..." : "Upload & Compress"}
      </button>
    </div>
  );
}
