import Head from "next/head";
import UploadForm from "../components/UploadForm";

export const metadata = {
  title: "JPG to PDF Converter | JPGStoPDF.COM",
  description: "Convert JPG, PNG, and WebP images to PDF in seconds. Adjust orientation, margins, and merge multiple files online for free.",
};

export default function HomePage() {
  const canonicalUrl = "https://www.jpgstopdf.com";

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />
      </Head>

      <main className="min-h-screen flex flex-col items-center relative px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">
          Free Online JPG to PDF Converter
        </h1>
        <p className="text-center mb-8 text-lg">
          Merge multiple images into a single PDF instantly. Fast, secure, and free!
        </p>

        <UploadForm autoDownload={true} />

        <section className="max-w-4xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose JPGStoPDF?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Convert JPG, PNG, WebP to PDF instantly.</li>
            <li>Merge multiple images into a single PDF.</li>
            <li>Adjust page orientation and margins.</li>
            <li>Fast, secure, and works on all devices.</li>
            <li>No installation or registration required.</li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Upload images using the form above.</li>
            <li>Arrange them in the order you want.</li>
            <li>Click "Convert" to generate a PDF.</li>
            <li>Download your PDF securely.</li>
          </ol>

                <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          About JPGStoPDF
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          JPGStoPDF is a free online tool that allows you to convert your images
          (JPG, PNG, WebP) to PDF format within seconds. You can merge multiple
          images, adjust page orientation, set margins, and create professional-quality
          PDFs without installing any software. Our service is fast, secure, and works
          on any device – desktop, tablet, or mobile. No registration is required,
          and your files are automatically deleted after processing to protect your privacy.
        </p>
      </section>
        </section>
      </main>
    </>
  );
}
