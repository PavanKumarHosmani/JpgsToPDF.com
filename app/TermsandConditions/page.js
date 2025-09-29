import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms & Conditions | JPGStoPDF.COM",
  description: "Read the terms and conditions of JPGStoPDF.COM. Learn about usage, limitations, and legal agreements for our free online image to PDF converter.",
};

export default function TermsPage() {
  const canonicalUrl = "https://www.jpgstopdf.com/termsandconditions";

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
              name: "Terms and Conditions - JPGStoPDF.COM",
            }),
          }}
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>

        <p className="mb-4">
          By using JPGStoPDF.COM, you agree to our terms and conditions. Use our services responsibly and do not misuse the platform.
        </p>

        <p className="mb-4">
          JPGStoPDF.COM is provided "as-is" without warranties. We are not liable for any loss or damage resulting from using the service.
        </p>
      </main>
    </>
  );
}
