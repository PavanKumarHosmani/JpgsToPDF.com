import PdfToJpg from "../../components/PdfToJpg";

export const metadata = {
  title: "PDF to JPG Converter - Free & Fast | JPGStoPDF",
  description:
    "Convert PDF pages to high-quality JPG images instantly. Free, fast, and secure online PDF to JPG converter.",
  alternates: {
    canonical: "https://www.jpgstopdf.com/to-jpg",
  },
  openGraph: {
    title: "Convert PDF to JPG Online - Free & Fast",
    description:
      "Easily convert PDF documents into JPG images. Free, fast, secure, and works in your browser.",
    url: "https://www.jpgstopdf.com/to-jpg",
    siteName: "JPGStoPDF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to JPG Converter - Free & Fast",
    description:
      "Free online tool to convert PDF pages into JPG images instantly.",
  },
};

export default function ToJpgPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">PDF to JPG Converter</h1>
      <p className="mb-6 text-gray-700">
        Upload your PDFs and convert them into high-quality JPG images instantly.
        Download results as ZIP files directly from your browser.
      </p>

      <PdfToJpg />

      <section className="mt-10 text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Why choose our PDF to JPG tool?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>📸 Convert each PDF page into a JPG image</li>
          <li>⚡ Fast conversion powered by S3 streaming</li>
          <li>💻 Works in your browser, no software needed</li>
          <li>🔒 Secure — files auto-deleted after processing</li>
        </ul>
      </section>
    </main>
  );
}
