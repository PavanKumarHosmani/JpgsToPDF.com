import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "FAQ | JPGStoPDF.COM",
  description: "Frequently asked questions about JPGStoPDF.COM. Learn how to use our free online JPG to PDF converter, features, and security.",
};

export default function FAQPage() {
  const canonicalUrl = "https://www.jpgstopdf.com/faq";

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${canonicalUrl}/og-image.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${canonicalUrl}/og-image.png`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              url: canonicalUrl,
              name: "FAQ - JPGStoPDF.COM",
            }),
          }}
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Is this converter free?</h2>
          <p>Yes, it is 100% free for all users.</p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Do I need to install software?</h2>
          <p>No, the converter works entirely in your browser without installation.</p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Which formats are supported?</h2>
          <p>JPG, PNG, JPEG, WebP.</p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Is my data safe?</h2>
          <p>All files are processed securely and never stored permanently.</p>
        </div>
      </main>
    </>
  );
}
