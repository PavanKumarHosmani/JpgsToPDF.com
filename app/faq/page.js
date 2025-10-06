import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function FAQPage() {
  const title = "FAQ | JPGStoPDF.COM";
  const description =
    "Frequently asked questions about JPGStoPDF.COM. Learn how to use our free online JPG to PDF converter, supported formats, security, and features.";
  const canonicalUrl = "https://www.jpgstopdf.com/faq";

  const faqs = [
    {
      question: "Is this converter free?",
      answer:
        "Yes, JPGStoPDF.COM is 100% free for all users. You can convert images to PDF, merge PDFs, or compress images without paying anything or creating an account.",
    },
    {
      question: "Do I need to install software?",
      answer:
        "No, our converter works directly in your browser. There’s no need to download or install any software. This makes it safer, faster, and more convenient to use on any device.",
    },
    {
      question: "Which formats are supported?",
      answer:
        "Our converter supports popular image formats including JPG, JPEG, PNG, and WebP. These can all be combined into a single PDF file quickly and easily.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Yes, your files are processed securely. All uploads are automatically deleted after conversion, and we never store your documents permanently.",
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />

        {/* OpenGraph */}
        <link rel="icon" href="/favicon.ico" />
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

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              url: canonicalUrl,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </Head>

      {/* <Header /> */}

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>

        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </main>

      {/* <Footer /> */}
    </>
  );
}
