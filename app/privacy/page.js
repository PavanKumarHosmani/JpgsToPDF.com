import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPage() {
  const title = "Privacy Policy | JPGStoPDF.COM";
  const description =
    "Read the privacy policy of JPGStoPDF.COM. Learn how we handle your data, ensure file security, and respect user privacy.";
  const canonicalUrl = "https://www.jpgstopdf.com/privacy";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />

        {/* OpenGraph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.jpgstopdf.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.jpgstopdf.com/og-image.png" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: canonicalUrl,
              name: "Privacy Policy - JPGStoPDF.COM",
              description: description,
            }),
          }}
        />
      </Head>

      {/* <Header /> */}

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-4">
          At <strong>JPGStoPDF.COM</strong>, we value and respect your privacy. 
          Our tools are designed to help users convert, compress, and merge files 
          securely without exposing sensitive data. We do not sell, share, or trade 
          any personal information.
        </p>

        <p className="mb-4">
          Uploaded files are processed securely on our servers and are deleted 
          automatically after the conversion is complete. We never store files 
          permanently, ensuring your documents remain private and safe.
        </p>

        <p className="mb-4">
          We may collect basic non-identifiable usage data, such as browser type 
          or device, for analytics and service improvements. This data does not 
          contain personal information and is used solely to enhance the 
          functionality and performance of our website.
        </p>

        <p className="mb-4">
          By using our services, you consent to this Privacy Policy and agree to 
          our terms of use. We may update this policy from time to time, and we 
          encourage users to review it periodically to stay informed.
        </p>

        <p>
          If you have any questions regarding our privacy practices, please 
          contact us via the details provided on our <a href="/contact" className="text-blue-600 underline">Contact Page</a>.
        </p>
      </main>

      {/* <Footer /> */}
    </>
  );
}
