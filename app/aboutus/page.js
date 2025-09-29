import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Us | JPGStoPDF.COM",
  description:
    "Learn about JPGStoPDF, a free online tool to convert images (JPG, PNG, WebP) to PDF quickly and securely. Fast, easy, and accessible from any device.",
};

export default function AboutPage() {
  const canonicalUrl = "https://www.jpgstopdf.com/aboutus";

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />

        {/* Open Graph & Twitter */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${canonicalUrl}/og-image.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${canonicalUrl}/og-image.png`} />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              url: canonicalUrl,
              name: "About JPGStoPDF.COM",
              description: metadata.description,
            }),
          }}
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">
          About <span className="text-blue-600">JPGStoPDF</span>
        </h1>

        <p className="mb-6 text-lg leading-relaxed">
          JPGStoPDF is a free online tool that allows anyone to convert images (JPG, PNG, WebP)
          to high-quality PDF documents quickly and securely. Our mission is to make file conversions
          effortless and accessible without installing any software.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🌍 Our Services</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Convert multiple image formats to PDF</li>
          <li>Merge multiple PDFs into one document</li>
          <li>Compress PDFs without losing quality</li>
          <li>Secure handling of all files with automatic deletion</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🚀 Our Vision</h2>
        <p className="leading-relaxed">
          We aim to make PDF conversions simple, fast, and accessible from any device,
          while ensuring the highest level of security and performance.
        </p>
      </main>
    </>
  );
}
