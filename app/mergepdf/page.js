import MergePdf from "../../components/MergePdf";

export const metadata = {
  title: "Merge PDF Files Online - Free & Fast | JPGStoPDF",
  description:
    "Easily merge multiple PDF files into one document online. Free, fast, secure PDF merger tool with no signup required.",
  alternates: {
    canonical: "https://www.jpgstopdf.com/merge",
  },
  openGraph: {
    title: "Merge PDF Files Online - Free & Fast",
    description:
      "Combine multiple PDF files into a single PDF instantly. Works online, secure, and free.",
    url: "https://www.jpgstopdf.com/merge",
    siteName: "JPGStoPDF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDF Files Online - Free & Fast",
    description:
      "Free online tool to merge PDF files instantly. No software needed.",
  },
};

export default function MergePage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Merge PDF Files Online</h1>
      <p className="mb-6 text-gray-700">
        Select two or more PDF files and merge them instantly into a single PDF
        document. Fast, secure, and free.
      </p>

      <MergePdf />

      <section className="mt-10 text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Why use our PDF Merger?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>📂 Merge multiple PDFs into one file easily</li>
          <li>⚡ Fast and secure processing with S3</li>
          <li>💻 Works on any device with a browser</li>
          <li>🔒 Files auto-deleted after processing</li>
        </ul>
      </section>
    </main>
  );
}
