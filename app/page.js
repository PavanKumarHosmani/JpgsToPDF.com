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
          href="/compress"
          className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
        >
          <h2 className="font-semibold text-xl mb-2">Compress Images</h2>
          <p className="text-sm text-gray-600">
            Reduce file size while keeping quality.
          </p>
        </Link>
        <Link
          href="/mergepdf"
          className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
        >
          <h2 className="font-semibold text-xl mb-2">Merge PDFs</h2>
          <p className="text-sm text-gray-600">
            Combine multiple PDFs into one file.
          </p>
        </Link>
        <Link
          href="/pdftojpg"
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
