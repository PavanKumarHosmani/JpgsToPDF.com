"use client";

import { useState } from "react";

export default function PdfToJpg() {
  const [files, setFiles] = useState([]);
  const [downloading, setDownloading] = useState(false);
  const [results, setResults] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    setResults([]);
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      alert("Please select PDF files first.");
      return;
    }

    setDownloading(true);

    try {
      // 1️⃣ Request upload URLs
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/pdf-to-jpg/upload-urls`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileCount: files.length }),
        }
      );

      const { operationId, uploadUrls } = await res.json();

      // 2️⃣ Upload each PDF to S3
      for (let i = 0; i < files.length; i++) {
        await fetch(uploadUrls[i].uploadUrl, {
          method: "PUT",
          headers: { "Content-Type": "application/pdf" },
          body: files[i],
        });
      }

      // 3️⃣ Trigger conversion
      const fileKeys = uploadUrls.map((u) => u.fileKey);
      const convRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/pdf/to-jpg/batch`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ operationId, fileKeys }),
        }
      );

      const { results } = await convRes.json();
      setResults(results);
      console.log("✅ Conversion completed. Results:", results);
    } catch (err) {
      console.error("Conversion failed:", err);
      alert("❌ Conversion failed. Check console for details.");
    } finally {
      setDownloading(false);
    }
  };

  const handleReset = () => {
    setFiles([]);
    setResults([]);
  };

  return (
    <div className="p-8 border rounded-lg shadow-md bg-white max-w-lg mx-auto transition-all duration-300">
      {!results.length ? (
        <>
          <h2
            className="text-xl font-semibold mb-4 text-gray-800 text-center"
            id="tool-title"
          >
            Convert PDFs to JPG
          </h2>

          {/* ✅ Accessible label and description */}
          <label
            htmlFor="pdfUpload"
            className="block mb-2 font-medium text-gray-700"
          >
            Select PDF files to convert
          </label>
          <input
            id="pdfUpload"
            type="file"
            accept="application/pdf"
            multiple
            onChange={handleFileChange}
            aria-describedby="pdfHelp"
            className="block w-full text-sm text-gray-700 
                       file:mr-4 file:py-2 file:px-4 
                       file:rounded-full file:border-0 
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-600
                       hover:file:bg-blue-100
                       cursor-pointer"
          />
          <p id="pdfHelp" className="text-sm text-gray-500 mt-1">
            You can select multiple PDF files to convert each page into a JPG image.
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
                  <li key={i} className="truncate">
                    {f.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={handleConvert}
            disabled={downloading}
            aria-label="Convert selected PDF files to JPG format"
            className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {downloading ? "Converting..." : "Convert to JPG"}
          </button>
        </>
      ) : (
        <>
          {/* ✅ Conversion Completed View */}
          <div className="text-center" aria-live="polite">
            <h2
              className="text-2xl font-bold mb-2 text-green-700"
              id="conversion-complete"
            >
              ✅ Conversion Completed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your JPG files are ready. Click below to download them.
            </p>

            <div className="space-y-3">
              {results.map(({ fileKey, downloadUrl }, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100"
                >
                  <span className="truncate text-gray-700">
                    {fileKey.split("/").pop()}
                  </span>
                  <a
                    href={downloadUrl}
                    download={fileKey.split("/").pop()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    aria-label={`Download ${fileKey.split("/").pop()}`}
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>

            <button
              onClick={handleReset}
              aria-label="Convert another PDF file to JPG"
              className="mt-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
            >
              Convert Another
            </button>
          </div>
        </>
      )}
    </div>
  );
}
