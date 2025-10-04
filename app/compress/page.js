import ImageCompressor from "../../components/ImageCompressor";

export const metadata = {
  title: "Online Image Compressor - Free & Fast | JPGStoPDF",
  description:
    "Compress JPG, PNG, and other images online. Free, fast, and secure image compression to reduce file size without losing quality.",
  alternates: {
    canonical: "https://www.jpgstopdf.com/compress",
  },
  openGraph: {
    title: "Online Image Compressor - Free & Fast",
    description:
      "Easily compress images (JPG, PNG, etc.) online. Save space and optimize your images for faster websites.",
    url: "https://www.jpgstopdf.com/compress",
    siteName: "JPGStoPDF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Image Compressor - Free & Fast",
    description:
      "Compress images instantly with our free online tool. Reduce size, keep quality.",
  },
};

export default function CompressPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Free Online Image Compressor</h1>
      <p className="mb-6 text-gray-700">
        Reduce the size of your images without compromising on quality. Upload
        JPG, PNG, or other image formats and download optimized compressed
        images instantly.
      </p>

      <ImageCompressor />

      <section className="mt-10 text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">
          Why use our Image Compressor?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>⚡ Fast & secure image compression</li>
          <li>📂 Supports JPG, PNG, and more formats</li>
          <li>🌍 Works directly in your browser</li>
          <li>💾 Save storage & speed up websites</li>
        </ul>
      </section>
    </main>
  );
}
