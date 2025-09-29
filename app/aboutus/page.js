import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Us | JPGStoPDF.COM",
  description: "Learn more about JPGStoPDF.COM, the free online tool to convert images (JPG, PNG, WebP) to PDF quickly and securely.",
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              url: canonicalUrl,
              name: "About JPGStoPDF.COM",
            }),
          }}
        />
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">About <span className="text-blue-600">JPGStoPDF</span></h1>
        <p className="mb-6 leading-relaxed">
          JPGStoPDF.COM is a free online tool to convert images like JPG, PNG, and WebP into high-quality PDF documents. We prioritize speed, security, and ease of use.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">🌍 Our Mission</h2>
        <p className="mb-6 leading-relaxed">
          Making file conversions effortless and accessible to everyone, anywhere, without installing software.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">🔒 Why Choose Us</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>100% free and accessible from any device</li>
          <li>No registration required</li>
          <li>Fast and secure cloud-based conversions</li>
          <li>Temporary file processing ensures privacy</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">🚀 Our Vision</h2>
        <p className="leading-relaxed">
          We aim to handle millions of users globally while maintaining top-notch security and performance.
        </p>
      </main>

      <Footer />
    </>
  );
}
