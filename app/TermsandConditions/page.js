import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms and Conditions | JPGStoPDF.COM",
  description: "Read the Terms and Conditions for using JPGStoPDF.COM, a free online image to PDF converter.",
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

      <Header />

      <main className="max-w-4xl mx-auto mt-10 p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-4 text-center">Terms and Conditions</h1>
        <p className="mb-4">
          By using JPGStoPDF.COM, you agree to the following terms and conditions. All uploaded files are your responsibility. We provide the service "as is" without warranties.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Do not upload illegal or copyrighted material without permission.</li>
          <li>All conversions are temporary; we do not store files permanently.</li>
          <li>JPGStoPDF.COM is not liable for any data loss or file corruption.</li>
          <li>We may update these terms at any time. Users are encouraged to review them periodically.</li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
