import PdfToJpg from "../../components/PdfToJpg";

export const metadata = {
  title: "PDF to JPG Converter - Convert Your PDF to Image Online",
  description:
    "Convert PDF pages into JPG images instantly online. Free, secure, and fast PDF to JPG converter.",
  alternates: { canonical: "https://www.jpgstopdf.com/pdftojpg" },
  openGraph: {
    title: "PDF to JPG Converter - Convert Your PDF to Image Online",
    description:
      "Easily convert PDF pages into JPG images with our free online tool. Fast, secure, and browser-based.",
    url: "https://www.jpgstopdf.com/pdftojpg",
    siteName: "JPGStoPDF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to JPG Converter - Convert Your PDF to Image Online",
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
            url: "https://www.jpgstopdf.com/pdftojpg",
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
        <a href="/compressimage" className="text-blue-600 hover:underline">
          compress images
        </a>{" "}
        or{" "}
        <a href="/mergepdf" className="text-blue-600 hover:underline">
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
          <p className="mb-4">
  The <strong>PDF to JPG Converter</strong> at JPGStoPDF.COM makes it
  quick and easy to turn your PDF documents into high-quality images. If
  you need to share a single page from a PDF, create image previews, or
  extract graphics for editing, this tool gives you a simple way to
  convert PDFs into clean JPG images in seconds.
</p>

<p className="mb-4">
  Upload your PDF file and our system will process it into individual JPG
  images for every page. You can download them instantly as a ZIP file,
  making it convenient to handle multi-page PDFs. Whether you’re a student
  preparing notes, a professional sharing document snapshots, or someone
  storing PDFs as images, this tool is designed to save time and effort.
</p>

<p className="mb-4">
  Our converter preserves the original quality of your PDF so your JPG
  images remain sharp and clear. All file processing is handled securely,
  and your uploaded files are automatically deleted after conversion to
  protect your privacy. This makes our service safe for converting
  personal, professional, or confidential documents.
</p>

<p className="mb-4">
  Unlike many tools that impose limits or add watermarks, JPGStoPDF.COM
  provides a <strong>free PDF to JPG converter</strong> with no hidden
  restrictions. It works smoothly across desktops, laptops, tablets, and
  mobile devices so you can convert PDF files anytime, anywhere without
  installing extra software.
</p>

<p className="mb-8">
  Start converting today with our <strong>online PDF to JPG tool</strong>.
  Enjoy the convenience of fast, secure, and professional conversions that
  make sharing and reusing your PDF content easier than ever.
</p>
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
