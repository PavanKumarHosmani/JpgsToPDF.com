"use client";

import ImageCompressor from "../../components/ImageCompressor";

export default function CompressPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Image Compression</h1>
      <ImageCompressor />
    </main>
  );
}
