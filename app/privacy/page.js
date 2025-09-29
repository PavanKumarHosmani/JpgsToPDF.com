import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | JPGStoPDF.COM",
  description: "Read the privacy policy of JPGStoPDF.COM. Learn how we handle your data, ensure file security, and respect user privacy.",
};

export default function PrivacyPage() {
  const canonicalUrl = "https://www.jpgstopdf.com/privacy";

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
              "@type": "WebPage",
              url: canonicalUrl,
              name: "Privacy Policy - JPGStoPDF.COM",
            }),
          }}
        />
      </Head>


      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-4">
          At JPGStoPDF.COM, we respect your privacy. We do not store or share uploaded images.
          Files are processed securely and temporarily, and are automatically deleted after conversion.
        </p>
        <p>
          By using our services, you consent to our privacy practices and terms of use.
        </p>
      </main>

    </>
  );
}
