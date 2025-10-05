import MergePdf from "../../components/MergePdf";

export const metadata = {
  title: "Merge PDFs Online - Free & Secure | JPGStoPDF",
  description:
    "Merge multiple PDF files into a single PDF online. Free, fast, and secure tool for combining PDFs easily in your browser.",
  alternates: { canonical: "https://www.jpgstopdf.com/merge" },
  openGraph: {
    title: "Merge PDFs Online - Free & Secure",
    description:
      "Combine multiple PDF files into one document with our free online PDF merger. Fast, secure, and browser-based.",
    url: "https://www.jpgstopdf.com/merge",
    siteName: "JPGStoPDF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDFs Online - Free & Secure",
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
            url: "https://www.jpgstopdf.com/merge",
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
        <a href="/compress" className="text-blue-600 hover:underline">
          compress images
        </a>{" "}
        or{" "}
        <a href="/to-jpg" className="text-blue-600 hover:underline">
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
