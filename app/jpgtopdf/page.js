import ImageToPdf from "../../components/ImageToPdf";

export const metadata = {
  title: "JPG to PDF Converter | Images JPG to PDF online",
  description:
    "Convert JPG, PNG, and WebP images into PDF with one click. Fast & secure online image to PDF conversion.",
  alternates: {
    canonical: "https://www.jpgstopdf.com/jpgtopdf", // relative, resolves against metadataBase
  },
  openGraph: {
    title: "JPG to PDF Converter | Images JPG to PDF online",
    description:
      "Convert JPG, PNG, and WebP images into PDF with one click. Fast & secure online image to PDF conversion.",
    url: "https://www.jpgstopdf.com/jpgtopdf", // relative to metadataBase
    siteName: "JPGStoPDF",
    type: "website",
  },
};

// optional: JSON-LD for consistency
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "JPG to PDF Converter",
  description:
    "Convert JPG, PNG, and WebP images into PDF with one click. Fast & secure online image to PDF conversion.",
  url: "https://www.jpgstopdf.com/jpgtopdf", // absolute URL, no trailing slash
};

export default function ConvertPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        JPG to PDF Converter
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
        Upload your images (JPG, PNG, WebP) and convert them into a single PDF
        instantly. 100% free, secure, and fast.
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

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Everything About JPG to PDF Conversion
        </h2>
        <p className="text-gray-700 mb-4">
          JPG to PDF conversion is one of the most commonly used tools on our
          website. It allows you to take one or multiple images and turn them
          into a single, shareable PDF file in just seconds. Our converter keeps
          the original image quality intact, so your photos, scanned documents,
          or graphics look exactly as expected.
        </p>
        <p className="text-gray-700 mb-4">
          Unlike heavy desktop software, our JPG to PDF tool works directly in
          your browser. There’s no need to download or install anything — simply
          upload your images, arrange them in the order you prefer, and download
          your PDF. The process is fast, secure, and works on any device —
          mobile, tablet, or desktop.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>✅ Convert multiple JPG images into a single PDF instantly.</li>
          <li>✅ Maintain original image quality without blurry results.</li>
          <li>✅ Works with JPG, PNG, and WebP images seamlessly.</li>
          <li>✅ Safe & secure — files are auto-deleted after processing.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Whether you’re submitting scanned assignments, creating a photo album,
          or organizing receipts, our free JPG to PDF converter is the perfect
          solution.
        </p>
        <p className="mb-4">
          The <strong>JPG to PDF Converter</strong> from JPGStoPDF.COM makes it
          quick and easy to turn your images into high-quality PDF documents.
          Whether you have a single photo or multiple images, you can combine
          them into one neatly organized PDF in just a few clicks. This is ideal
          for creating digital photo albums, sharing assignments, or submitting
          official documents that require PDF format.
        </p>

        <p className="mb-4">
          Our tool supports JPG, PNG, and other common image types, so you don’t
          have to worry about compatibility. Simply upload your pictures and let
          our system handle the conversion while preserving original image
          quality. The process is completely secure, with all files
          automatically deleted after conversion to protect your privacy.
        </p>

        <p className="mb-4">
          Using our JPG to PDF converter is straightforward: upload your images,
          arrange them in the order you want, and click convert. In seconds,
          you’ll receive a downloadable PDF file. You can combine multiple
          images at once, making it much faster than manual methods or offline
          software.
        </p>

        <p className="mb-4">
          Unlike many other free tools, JPGStoPDF.COM does not add watermarks,
          limitations, or hidden charges. Our service works across all devices,
          whether you’re on a computer, tablet, or mobile phone, so you can
          convert images to PDF anytime and anywhere.
        </p>

        <p className="mb-8">
          Start converting your images today with our trusted
          <strong> free JPG to PDF online tool</strong>. Enjoy the convenience
          of professional-quality PDFs without the need for downloads or
          expensive software.
        </p>
      </section>
    </main>
  );
}
