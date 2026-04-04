// app/page.js

import Link from "next/link";

export const metadata = {
  title: "JPGStoPDF - Free Online Image & PDF Tools",
  description:
    "Convert JPG to PDF, compress images, merge PDFs, and convert PDF to JPG online. 100% free, secure, and fast — works on all devices.",
  alternates: {
    canonical: "https://www.jpgstopdf.com",
  },
  openGraph: {
    title: "JPGStoPDF - Free Online Image & PDF Tools",
    description:
      "Convert JPG to PDF, compress images, merge PDFs, and convert PDF to JPG online. Free, secure, and fast on all devices.",
    url: "https://www.jpgstopdf.com",
    siteName: "JPGStoPDF",
    images: [
      {
        url: "https://www.jpgstopdf.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JPGStoPDF Online Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPGStoPDF - Free Online Image & PDF Tools",
    description:
      "Free JPG to PDF, PDF to JPG, Compress Images, Merge PDFs. 100% secure and online.",
    images: ["https://www.jpgstopdf.com/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Free Online JPG to PDF & PDF Tools
        </h1>
        <p className="text-lg text-gray-600">
          Convert, compress, and merge your files instantly. Secure, fast, and
          works on all devices — no signup required.
        </p>
      </section>

      {/* Tool Grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        <Link
          href="/compress-image"
          className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
        >
          <h2 className="font-semibold text-xl mb-2">Compress Images</h2>
          <p className="text-sm text-gray-600">
            Reduce file size while keeping quality.
          </p>
        </Link>
        <Link
          href="/merge-pdf"
          className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
        >
          <h2 className="font-semibold text-xl mb-2">Merge PDFs</h2>
          <p className="text-sm text-gray-600">
            Combine multiple PDFs into one file.
          </p>
        </Link>
        <Link
          href="/pdf-to-jpg"
          className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
        >
          <h2 className="font-semibold text-xl mb-2">PDF to JPG</h2>
          <p className="text-sm text-gray-600">
            Convert PDF pages into high-quality JPGs.
          </p>
        </Link>
        <Link
          href="/jpgtopdf"
          className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
        >
          <h2 className="font-semibold text-xl mb-2">Image to PDF</h2>
          <p className="text-sm text-gray-600">
            Turn images into a single PDF file.
          </p>
        </Link>
         <Link
          href="/unlock-pdf"
          className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
        >
          <h2 className="font-semibold text-xl mb-2">Unlock PDF</h2>
          <p className="text-sm text-gray-600">
            Remove password protection from PDF files.
          </p>
        </Link>
      </section>

      {/* Benefits */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-4">Why choose JPGStoPDF?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>🔒 100% secure — your files are auto-deleted after conversion</li>
          <li>⚡ Fast processing with no signup required</li>
          <li>📱 Works on desktop, tablet, and mobile devices</li>
          <li>💯 Always free to use without limits</li>
        </ul>
      </section>

      {/* JPG to PDF Section */}
<section className="max-w-5xl mx-auto mb-16 px-4">
  <h2 className="text-2xl font-bold mb-4">JPG to PDF Converter – Free Online Tool</h2>
  <p className="text-gray-700 mb-4">
    Convert your JPG, PNG, or WebP images into a single PDF instantly. Our free JPG to PDF
    converter works online, requires no installation, and keeps your original image quality intact.
    Perfect for photo albums, scanned homework, or professional reports.
  </p>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>✅ Combine multiple images into one PDF.</li>
    <li>✅ Works on any device – desktop or mobile.</li>
    <li>✅ Secure and private – files auto-delete after processing.</li>
  </ul>
</section>

{/* Merge PDF Section */}
<section className="max-w-5xl mx-auto mb-16 px-4">
  <h2 className="text-2xl font-bold mb-4">Merge PDF Files Online</h2>
  <p className="text-gray-700 mb-4">
    Need to combine multiple PDF documents into one? Our Merge PDF tool makes it simple. Just upload
    your files, arrange them in the order you want, and download your single merged PDF in seconds.
  </p>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>✅ Merge unlimited PDFs quickly.</li>
    <li>✅ Preserve formatting and document quality.</li>
    <li>✅ No software download needed – runs in your browser.</li>
  </ul>
</section>

{/* Compress Images Section */}
<section className="max-w-5xl mx-auto mb-16 px-4">
  <h2 className="text-2xl font-bold mb-4">Compress Images – Reduce File Size Without Losing Quality</h2>
  <p className="text-gray-700 mb-4">
    Upload your images and compress them to a smaller size while maintaining excellent quality.
    This makes sharing, emailing, and uploading much faster without blurry or pixelated results.
  </p>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>✅ Shrink file size for faster uploads.</li>
    <li>✅ Works with JPG, PNG, and WebP formats.</li>
    <li>✅ Perfect for websites, email, and storage saving.</li>
  </ul>
</section>

{/* PDF to JPG Section */}
<section className="max-w-5xl mx-auto mb-16 px-4">
  <h2 className="text-2xl font-bold mb-4">PDF to JPG Converter – Extract Pages as Images</h2>
  <p className="text-gray-700 mb-4">
    Turn your PDF pages into high-quality JPG images with our easy-to-use converter. Extract pages
    as individual images for presentations, notes, or quick sharing.
  </p>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>✅ Convert entire PDFs or select pages to JPG.</li>
    <li>✅ Fast conversion with sharp image quality.</li>
    <li>✅ 100% free, secure, and works on all devices.</li>
  </ul>
</section>


      {/* FAQ */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border rounded p-4">
            <summary className="font-semibold">
              Are these tools free to use?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes, all tools are completely free with no hidden charges.
            </p>
          </details>
          <details className="border rounded p-4">
            <summary className="font-semibold">
              Is it safe to upload my files?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes. Files are encrypted, processed securely, and auto-deleted
              after completion.
            </p>
          </details>
          <details className="border rounded p-4">
            <summary className="font-semibold">
              Can I use it on my phone?
            </summary>
            <p className="mt-2 text-gray-600">
              Absolutely. JPGStoPDF works on any device with a browser.
            </p>
          </details>
        </div>
        <section className="my-12">
  <h2 className="text-2xl font-bold mb-4">Free, Secure, and Easy-to-Use File Conversion</h2>
  <p className="mb-4">
    One of the biggest concerns when using online tools is file safety. At JPGStoPDF.COM, we guarantee your privacy. All uploads are processed securely and deleted automatically after conversion. This makes it safe to handle personal documents, professional contracts, or academic materials. No one has access to your files except you.
  </p>
  <p>
    Our tools are also designed to be mobile-friendly, ensuring a smooth experience whether you’re on a desktop computer or a smartphone. With a clean interface, clear instructions, and quick downloads, anyone can use the platform without technical skills. By keeping the service free and user-focused, we ensure that everyone—from students to professionals—can complete their tasks without hassle. If you are looking for <strong>fast, secure, and free file conversion</strong>, our platform is the perfect choice.
  </p>
</section>

      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "JPGStoPDF",
              url: "https://www.jpgstopdf.com",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "Web",
              description:
                "Free online tools to compress images, merge PDFs, convert PDF to JPG, and convert images to PDF. Fast, secure, and easy to use on any device.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Compress Images",
                "Merge PDFs",
                "Convert PDF to JPG",
                "Convert Images to PDF",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Are these tools free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, all tools on JPGStoPDF are free with no hidden charges.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it safe to upload my files?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, your files are encrypted and automatically deleted after conversion.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I use it on my phone?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, JPGStoPDF works seamlessly on mobile, tablet, and desktop browsers.",
                  },
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
