import UploadForm from "../components/UploadForm";
import Footer from "../components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Convert JPG to PDF | Images JPG to PDF online",
  description: "Convert JPG images to PDF in seconds. Easily adjust orientation and margins. Upload your file and transform it. Select JPG images.",
  keywords: "jpg to pdf, jpg to pdf converter, image to pdf, merge images to pdf, free pdf converter",
};

export default function Home() {  
  const canonicalUrl = "https://www.jpgstopdf.com";

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Convert JPG to PDF. Images JPG to PDF online",
    operatingSystem: "Any",
    applicationCategory: "MultimediaApplication",
    description:
      "Convert JPG, PNG, and WebP images to a single PDF online for free. Secure, fast, and works on all devices.",
    url: canonicalUrl,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is this converter free?", acceptedAnswer: { "@type": "Answer", text: "Yes, it is 100% free." } },
      { "@type": "Question", name: "Do I need to install software?", acceptedAnswer: { "@type": "Answer", text: "No installation needed; works in browser." } },
      { "@type": "Question", name: "Which formats are supported?", acceptedAnswer: { "@type": "Answer", text: "JPG, PNG, JPEG, WebP." } },
      { "@type": "Question", name: "Is it secure?", acceptedAnswer: { "@type": "Answer", text: "Files are processed securely and never shared." } },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jpgstopdf.com" },
    ],
  };

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <main className="min-h-screen flex flex-col items-center relative">
        {/* Header */}
        <header className="bg-blue-700 text-white text-center py-10 w-full">
          <h1 className="text-4xl font-bold">Free Online JPG to PDF Converter</h1>
          <p className="mt-3 text-lg">Merge multiple images into a single PDF instantly.</p>
        </header>

        {/* Upload Form */}
        <section className="flex justify-center w-full max-w-4xl px-4 mt-10">
          <UploadForm autoDownload={true} />
        </section>

         {/* Features Section */}
        <section className="max-w-4xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Our Converter?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Convert multiple images (JPG, PNG, WebP) to PDF in seconds.</li>
            <li>Adjust page orientation and margins for professional PDFs.</li>
            <li>Completely free to use with no hidden charges.</li>
            <li>Fast, secure, and works on all devices including mobile.</li>
            <li>No installation required – 100% online.</li>
          </ul>
        </section>

        {/* How It Works Section */}
        <section className="max-w-4xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Upload your JPG, PNG, or WebP images using the form above.</li>
            <li>Arrange images in your preferred order.</li>
            <li>Click "Convert" to generate a PDF instantly.</li>
            <li>Download your PDF securely without any registration.</li>
          </ol>
        </section>


        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto my-16 px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((faq, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="text-lg font-medium text-blue-700">{faq.name}</h3>
              <p className="text-gray-700 mt-1">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
