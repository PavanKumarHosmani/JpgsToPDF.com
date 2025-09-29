import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | JPGStoPDF.COM",
  description: "Read the privacy policy of JPGStoPDF.COM and learn how we handle your data securely and respect user privacy.",
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

      <Header />

      <main className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg text-gray-800">
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
        <p className="mb-4">
          JPGStoPDF.COM respects your privacy. We do not store or share your uploaded images. All conversions are processed securely and temporarily.
        </p>
        <p className="mb-4">
          Files are automatically deleted after processing. We do not require registration, and no personal information is collected beyond what you provide in emails or forms.
        </p>
        <p>
          By using our service, you agree to our privacy practices and terms of use.
        </p>
      </main>

      <Footer />
    </>
  );
}
