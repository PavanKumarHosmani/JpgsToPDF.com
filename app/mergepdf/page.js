import MergePdf from "../../components/MergePdf";

export const metadata = {
  title: "Merge PDF - Free online PDF Merger fast and secure",
  description:
    "Merge multiple PDF files into a single PDF online. Free, fast, and secure tool for combining PDFs easily in your browser.",
  alternates: { 
    canonical: "https://www.jpgstopdf.com/mergepdf" // relative, auto-resolves with metadataBase
  },
  openGraph: {
    title: "Merge PDF - Free online PDF Merger fast and secure",
    description:
      "Combine multiple PDF files into one document with our free online PDF merger. Fast, secure, and browser-based.",
    url: "https://www.jpgstopdf.com/mergepdf", // relative to metadataBase
    siteName: "JPGStoPDF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDF - Free online PDF Merger fast and secure",
    description:
      "Easily merge multiple PDF files into one. Free, secure, and works directly in your browser.",
  },
};

export default function MergePage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      {/* ✅ WebApp JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "JPGStoPDF - PDF Merger",
            url: "https://www.jpgstopdf.com/mergepdf", // absolute, no trailing slash
            description:
              "Merge multiple PDF files into a single PDF online. Free, fast, and secure tool.",
            applicationCategory: "Utility",
            operatingSystem: "Any",
          }),
        }}
      />

      <h1 className="text-3xl font-bold mb-6">Free Online PDF Merger</h1>
      <p className="mb-6 text-gray-700">
        Combine multiple PDFs into a single document instantly. Works online, no
        installation required. You can also{" "}
        <a href="/compressimage" className="text-blue-600 hover:underline">
          compress images
        </a>{" "}
        or{" "}
        <a href="/pdftojpg" className="text-blue-600 hover:underline">
          convert PDFs to JPG
        </a>{" "}
        with our free tools.
      </p>

      <MergePdf />

      <section className="mt-10 text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Why use our PDF Merger?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>📂 Merge unlimited PDFs quickly</li>
          <li>🔒 Secure and private — files auto-deleted after use</li>
          <li>🌍 Works online in your browser</li>
          <li>💻 No installation required</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-4">Why Merge PDFs Online?</h2>
        <p className="text-gray-700 mb-2">
          Merging PDFs helps keep your documents organized and easy to share. Instead
          of sending multiple files, you can send one combined PDF. This is useful
          for:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Students combining lecture notes or assignments.</li>
          <li>Professionals merging contracts, invoices, and reports.</li>
          <li>Creating digital booklets or eBooks from separate PDFs.</li>
          <li>Archiving documents for safe storage and quick access.</li>
        </ul>
        <p className="mb-4">
          The <strong>Merge PDF tool</strong> from JPGStoPDF.COM allows you to
          quickly combine multiple PDF documents into a single, organized file.
          Whether you need to merge assignments, business reports, or scanned
          pages, our tool ensures a smooth and professional result without any
          effort. No installation or software download is required—everything
          works directly in your browser.
        </p>

        <p className="mb-4">
          Many users need to combine PDFs for everyday tasks: students joining
          project reports, professionals compiling invoices, or teachers merging
          study materials. With our online service, you can upload multiple PDF
          files at once and arrange them in the order you prefer before merging.
          The entire process takes just seconds and maintains the original
          formatting of your documents.
        </p>

        <p className="mb-4">
          Our tool is designed for speed, security, and simplicity. All files are
          processed using encrypted connections and deleted automatically after
          merging, keeping your documents private. You never have to worry about
          your personal or sensitive files being stored or shared.
        </p>

        <p className="mb-4">
          Unlike many free tools that limit the number of files or add unwanted
          watermarks, JPGStoPDF.COM provides a <strong>completely free PDF merger</strong>
          with no restrictions. It works seamlessly across devices—desktop,
          laptop, tablet, or mobile—so you can merge PDFs anywhere, anytime.
        </p>

        <p className="mb-8">
          Start combining your PDF files today with our reliable
          <strong> online PDF merge tool</strong> and make document management
          easier than ever. With just a few clicks, you’ll have a single PDF
          ready for sharing, printing, or secure storage.
        </p>
      </section>

      {/* ✅ FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              Is the PDF merger free?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes, our online PDF merger is completely free to use.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              Are my PDF files safe?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes, all files are processed securely and auto-deleted after merge.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              Can I merge large PDFs?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes, our merger supports both small and large PDF files.
            </p>
          </details>
        </div>

        {/* ✅ FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the PDF merger free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our online PDF merger is completely free to use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are my PDF files safe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, all files are processed securely and auto-deleted after merge.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I merge large PDFs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our merger supports both small and large PDF files.",
                  },
                },
              ],
            }),
          }}
        />
      </section>
    </main>
  );
}
