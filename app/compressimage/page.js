import ImageCompressor from "../../components/ImageCompressor";

export const metadata = {
  title: "Online Image Compressor - Free & Fast | JPGStoPDF",
  description:
    "Compress JPG, PNG, and other images online. Free, fast, and secure image compression to reduce file size without losing quality.",
  alternates: {
    canonical: "https://www.jpgstopdf.com/compress",
  },
  openGraph: {
    title: "Online Image Compressor - Free & Fast",
    description:
      "Easily compress images (JPG, PNG, etc.) online. Save space and optimize your images for faster websites.",
    url: "https://www.jpgstopdf.com/compress",
    siteName: "JPGStoPDF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Image Compressor - Free & Fast",
    description:
      "Compress images instantly with our free online tool. Reduce size, keep quality.",
  },
};

export default function CompressPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      {/* ✅ JSON-LD for WebApp */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "JPGStoPDF - Online Image Compressor",
            url: "https://www.jpgstopdf.com/compress",
            description:
              "Compress JPG, PNG, and other images online. Free, fast, and secure image compression to reduce file size without losing quality.",
            applicationCategory: "Utility",
            operatingSystem: "Any",
          }),
        }}
      />

      <h1 className="text-3xl font-bold mb-6">Free Online Image Compressor</h1>
      <p className="mb-6 text-gray-700">
        Reduce the size of your images without compromising on quality. Upload
        JPG, PNG, or other image formats and download optimized compressed
        images instantly. You can also{" "}
        <a href="/merge" className="text-blue-600 hover:underline">
          merge PDFs
        </a>{" "}
        or{" "}
        <a href="/to-jpg" className="text-blue-600 hover:underline">
          convert PDF to JPG
        </a>{" "}
        with our other free tools.
      </p>

      <ImageCompressor />

      <section className="mt-10 text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">
          Why use our Image Compressor?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>⚡ Fast & secure image compression</li>
          <li>📂 Supports JPG, PNG, and more formats</li>
          <li>🌍 Works directly in your browser</li>
          <li>💾 Save storage & speed up websites</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-4">Tips for Compressing Images</h2>
        <p className="text-gray-700 mb-2">
          Image compression is important for faster website loading, easy sharing,
          and reduced storage usage. Here are some tips:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Use JPG for photographs and PNG for graphics with transparency.</li>
          <li>Resize large images before uploading for best results.</li>
          <li>Our compressor balances quality and size automatically.</li>
          <li>For websites, smaller file sizes improve SEO and user experience.</li>
        </ul>
      </section>


      {/* ✅ FAQ Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              Is this image compressor free?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes, our online image compressor is completely free to use without
              signup.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              Will image quality be reduced?
            </summary>
            <p className="mt-2 text-gray-600">
              Our tool compresses file size while keeping high visual quality.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              Are my files safe?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes, files are processed securely and automatically deleted after
              compression.
            </p>
          </details>
        </div>

        {/* ✅ FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is this image compressor free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our online image compressor is completely free to use without signup.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will image quality be reduced?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our tool compresses file size while keeping high visual quality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are my files safe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, files are processed securely and automatically deleted after compression.",
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
