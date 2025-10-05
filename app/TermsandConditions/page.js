import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TermsPage() {
  const title = "Terms & Conditions | JPGStoPDF.COM";
  const description =
    "Read the terms and conditions of JPGStoPDF.COM. Learn about usage, limitations, liability, and legal agreements for our free online image to PDF converter.";
  const canonicalUrl = "https://www.jpgstopdf.com/terms-and-conditions";

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
              name: "Terms and Conditions - JPGStoPDF.COM",
              description: description,
            }),
          }}
        />
      </Head>

      {/* <Header /> */}

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>

        <p className="mb-4">
          Welcome to <strong>JPGStoPDF.COM</strong>. By accessing and using our
          website, you agree to be bound by the following terms and conditions.
          These terms govern your use of our free online file conversion tools,
          including image to PDF, PDF merging, compression, and related services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Acceptable Use</h2>
        <p className="mb-4">
          You agree to use our services responsibly and only for lawful
          purposes. You must not upload files that contain malicious software,
          copyrighted content without authorization, or any materials that
          violate applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Service Availability</h2>
        <p className="mb-4">
          JPGStoPDF.COM is provided on an “as-is” and “as-available” basis.
          While we strive to maintain reliable service, we do not guarantee that
          the website will be uninterrupted, error-free, or free from security
          vulnerabilities.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
        <p className="mb-4">
          We are not liable for any direct, indirect, incidental, or
          consequential damages resulting from the use of our services. Users
          are solely responsible for ensuring the accuracy and legality of the
          files they process.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">File Handling & Privacy</h2>
        <p className="mb-4">
          Uploaded files are processed securely and deleted automatically after
          completion. We do not permanently store or share your files. For more
          details, please review our{" "}
          <a
            href="/privacy"
            className="text-blue-600 underline"
          >
            Privacy Policy
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to Terms</h2>
        <p className="mb-4">
          We may update or modify these Terms & Conditions at any time without
          prior notice. Users are encouraged to review this page periodically to
          stay informed of any changes.
        </p>

        <p>
          By continuing to use our website, you acknowledge that you have read,
          understood, and agreed to these terms.
        </p>
      </main>

      {/* <Footer /> */}
    </>
  );
}
