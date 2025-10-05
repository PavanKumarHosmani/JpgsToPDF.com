import ImageToPdf from "../../components/ImageToPdf";

export const metadata = {
  title: "Image to PDF Converter | JPGStoPDF",
  description: "Free online tool to convert JPG, PNG, and WebP images into a single PDF instantly.",
  alternates: {
    canonical: "https://www.jpgstopdf.com/convert",
  },
  openGraph: {
    title: "Image to PDF Converter | JPGStoPDF",
    description: "Fast & secure online image to PDF conversion. Convert JPG, PNG, and WebP images into PDF with one click.",
    url: "https://www.jpgstopdf.com/convert",
    siteName: "JPGStoPDF",
    type: "website",
  },
};

export default function ConvertPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Image to PDF Converter</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
        Upload your images (JPG, PNG, WebP) and convert them into a single PDF instantly. 
        100% free, secure, and fast.
      </p>

      <ImageToPdf />

      <section className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-3">Why use JPGStoPDF?</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Convert multiple images into one PDF quickly</li>
          <li>No software installation required</li>
          <li>Files are processed securely in the cloud</li>
          <li>Supports JPG, PNG, and WebP formats</li>
        </ul>
      </section>
    </main>
  );
}
