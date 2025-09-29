import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Disclaimer | JPGStoPDF.COM",
  description: "Read the disclaimer for JPGStoPDF.COM regarding usage, liability, and limitations of our free online converter.",
};

export default function DisclaimerPage() {
  const canonicalUrl = "https://www.jpgstopdf.com/disclaimer";

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
              name: "Disclaimer - JPGStoPDF.COM",
            }),
          }}
        />
      </Head>

      <Header />

      <main className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg text-gray-800">
        <h1 className="text-3xl font-bold mb-4 text-center">Disclaimer</h1>
        <p className="mb-2">
          JPGStoPDF.COM provides a free online JPG to PDF conversion tool. While we strive for accuracy, we cannot guarantee uninterrupted service.
        </p>
        <p className="mb-2">
          By using this website, you agree JPGStoPDF.COM is not liable for any data loss, corruption, or issues arising from file conversion.
        </p>
        <p>
          Files are processed securely and automatically deleted after use.
        </p>
      </main>

      <Footer />
    </>
  );
}
