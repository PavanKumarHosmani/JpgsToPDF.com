import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UploadForm from "../components/UploadForm";

export const metadata = {
  title: "JPG to PDF Converter | JPGStoPDF.COM",
  description: "Convert JPG, PNG, and WebP images to PDF in seconds. Adjust orientation, margins, and merge multiple files online for free.",
  keywords: "jpg to pdf, image to pdf online, free pdf converter, merge pdf",
};

export default function HomePage() {
  const canonicalUrl = "https://www.jpgstopdf.com";

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: canonicalUrl,
              name: "JPG to PDF Converter - JPGStoPDF.COM",
              description: metadata.description,
            }),
          }}
        />
      </Head>

      <Header />

      <main className="min-h-screen flex flex-col items-center relative px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Free Online JPG to PDF Converter</h1>
        <p className="text-center mb-8 text-lg">Merge multiple images into a single PDF instantly. Fast, secure, and free!</p>

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
        </section>
      </main>

      <Footer />
    </>
  );
}
