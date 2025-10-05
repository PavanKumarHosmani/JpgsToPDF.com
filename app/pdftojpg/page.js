import PdfToJpg from "../../components/PdfToJpg";

export const metadata = {
  title: "Convert PDF to JPG Online - Free & Fast | JPGStoPDF",
  description:
    "Convert PDF pages into JPG images instantly online. Free, secure, and fast PDF to JPG converter.",
  alternates: { canonical: "https://www.jpgstopdf.com/to-jpg" },
  openGraph: {
    title: "Convert PDF to JPG Online - Free & Fast",
    description:
      "Easily convert PDF pages into JPG images with our free online tool. Fast, secure, and browser-based.",
    url: "https://www.jpgstopdf.com/to-jpg",
    siteName: "JPGStoPDF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert PDF to JPG Online - Free & Fast",
    description:
      "Convert PDF files into high-quality JPG images instantly. Free, secure, and works online.",
  },
};

export default function ToJpgPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      {/* ✅ WebApp JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "JPGStoPDF - PDF to JPG Converter",
            url: "https://www.jpgstopdf.com/to-jpg",
            description:
              "Convert PDF pages into JPG images instantly online. Free, fast, and secure tool.",
            applicationCategory: "Utility",
            operatingSystem: "Any",
          }),
        }}
      />

      <h1 className="text-3xl font-bold mb-6">Free PDF to JPG Converter</h1>
      <p className="mb-6 text-gray-700">
        Convert your PDF pages into high-quality JPG images instantly. Works online
        without installation. You can also{" "}
        <a href="/compress" className="text-blue-600 hover:underline">
          compress images
        </a>{" "}
        or{" "}
        <a href="/merge" className="text-blue-600 hover:underline">
          merge PDFs
        </a>{" "}
        with our other tools.
      </p>

      <PdfToJpg />

      <section className="mt-10 text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">
          Why use our PDF to JPG Converter?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>📷 Convert each PDF page into a JPG image</li>
          <li>⚡ Fast & secure processing</li>
          <li>🌍 Works online in your browser</li>
          <li>💻 No software installation needed</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-4">Best Practices for Converting PDF to JPG</h2>
          <p className="text-gray-700 mb-2">
            Converting PDF pages to JPG images makes sharing and editing easier. Follow
            these best practices:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use JPG for smaller file size and easy sharing.</li>
            <li>Ensure PDFs with images are converted at high quality for clarity.</li>
            <li>Batch convert large PDFs into ZIP files for convenience.</li>
            <li>Perfect for creating presentations, sharing notes, or printing visuals.</li>
          </ul>
        </section>


      {/* ✅ FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              Is this PDF to JPG converter free?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes, it’s completely free to convert PDFs into JPG images.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              Can I convert multi-page PDFs?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes, each page of your PDF will be converted into a separate JPG image.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              Is my data safe?
            </summary>
            <p className="mt-2 text-gray-600">
              Absolutely. All files are processed securely and deleted after conversion.
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
                  name: "Is this PDF to JPG converter free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it’s completely free to convert PDFs into JPG images.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I convert multi-page PDFs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, each page of your PDF will be converted into a separate JPG image.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my data safe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. All files are processed securely and deleted after conversion.",
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
