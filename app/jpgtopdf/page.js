import ImageToPdf from "../../components/ImageToPdf";

export const metadata = {
  title: "Free JPG to PDF Converter Online | Convert Images to PDF Instantly",
  description:
    "Convert JPG, PNG, and WebP images to PDF online for free. Merge multiple images into one PDF instantly. Fast, secure, and no signup required.",
  metadataBase: new URL("https://www.jpgstopdf.com"),
  alternates: {
    canonical: "/jpgtopdf",
  },
    robots: {
    index: true,
    follow: true,
  },
  keywords: [
  "jpg to pdf",
  "convert jpg to pdf",
  "image to pdf",
  "png to pdf",
  "merge images to pdf",
  "free jpg to pdf converter"
],
  openGraph: {
    title: "Free JPG to PDF Converter Online",
    description:
      "Convert JPG, PNG, and WebP images into PDF instantly. Free, fast, and secure online tool.",
    url: "https://www.jpgstopdf.com/jpgtopdf",
    siteName: "JPGStoPDF",
    type: "website",
  },
};


export const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
     "@id": "https://www.jpgstopdf.com/jpgtopdf#app",
    inLanguage: "en",
    name: "Free JPG to PDF Converter",
    description:
      "Free online JPG to PDF converter. Convert JPG, PNG, and WebP images into PDF instantly without losing quality.",
    url: "https://www.jpgstopdf.com/jpgtopdf",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
  {
    "@context": "https://schema.org",
    
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this JPG to PDF converter free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our tool is completely free to use with no hidden charges.",
        },
      },
      {
        "@type": "Question",
        name: "Does it reduce image quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, your images are converted without losing quality.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert multiple images at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can upload multiple images and merge them into a single PDF.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your files are processed securely and are not stored permanently.",
        },
      },
    ],
  },
];



export default function ConvertPage() {
  return (
  <>
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <main className="container mx-auto px-4 py-8">
<h1 className="text-3xl font-bold text-center mb-6">
  Free JPG to PDF Converter Online (Fast & Secure)
</h1>
      <ImageToPdf />

      <section className="mt-12 max-w-3xl mx-auto">
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
        Upload your images (JPG, PNG, WebP) and convert them into a single PDF
        instantly. 100% free, secure, and fast.
      </p>
      </section>
      <section className="max-w-4xl mx-auto mt-12 text-gray-700">

      <h2 className="text-2xl font-semibold mb-3">
  Convert JPG to PDF Online for Free
</h2>

<p className="mb-4">
  Use our free JPG to PDF converter to quickly merge multiple images into a single PDF file. No signup required — upload your files, convert instantly, and download your PDF in seconds.
</p>

  <p className="mb-4">
    Convert JPG images to PDF online quickly and easily using our free tool. Whether you want to merge multiple images into a single PDF or convert a single photo, our JPG to PDF converter delivers fast and reliable results. It supports JPG, PNG, and WebP formats, making it a versatile solution for all your image-to-PDF needs.
  </p>

  <p className="mb-6">
    This online tool works directly in your browser, so there’s no need to install software or create an account. Simply upload your images, arrange them if needed, and download your PDF instantly. It’s designed to be fast, secure, and accessible on all devices including mobile, tablet, and desktop.
  </p>

  <h2 className="text-2xl font-semibold mb-3">
    How to Convert JPG to PDF Online
  </h2>
  <ol className="list-decimal list-inside space-y-2 mb-6">
    <li>Upload your JPG, PNG, or WebP images</li>
    <li>Arrange images in your preferred order</li>
    <li>Click on "Convert to PDF"</li>
    <li>Download your PDF file instantly</li>
  </ol>

  <h2 className="text-2xl font-semibold mb-3">
    Why Use Our JPG to PDF Converter?
  </h2>
  <ul className="list-disc list-inside space-y-2 mb-6">
    <li>Merge multiple images into a single PDF file</li>
    <li>Maintain original image quality without compression loss</li>
    <li>No software installation required</li>
    <li>Fast processing and instant downloads</li>
    <li>Supports JPG, PNG, and WebP formats</li>
    <li>Works on all devices including mobile and desktop</li>
  </ul>

  <h2 className="text-2xl font-semibold mb-3">
    Fast, Secure & Reliable Conversion
  </h2>
  <p className="mb-4">
    Our JPG to PDF converter is built with performance and security in mind. All files are processed securely, and we ensure that your data is handled safely during conversion. The tool is optimized for speed, allowing you to convert images into PDF within seconds, even when working with multiple files.
  </p>

  <p className="mb-6">
    Unlike many other tools, we focus on maintaining the original quality of your images. This means your converted PDF will retain clarity and resolution, making it suitable for professional use such as document submission, presentations, or record keeping.
  </p>

  <h2 className="text-2xl font-semibold mb-3">
    Use Cases of JPG to PDF Conversion
  </h2>
  <ul className="list-disc list-inside space-y-2 mb-6">
    <li>Submit scanned documents or assignments</li>
    <li>Create photo albums in PDF format</li>
    <li>Organize receipts and invoices</li>
    <li>Share multiple images as a single file</li>
  </ul>

  <h2 className="text-2xl font-semibold mb-3">
    Frequently Asked Questions
  </h2>

  <div className="space-y-4">
    <div>
      <h3 className="font-semibold">Is this JPG to PDF converter free?</h3>
      <p>Yes, our tool is completely free to use with no hidden charges.</p>
    </div>

    <div>
      <h3 className="font-semibold">Does it reduce image quality?</h3>
      <p>No, your images are converted without losing quality.</p>
    </div>

    <div>
      <h3 className="font-semibold">Can I convert multiple images at once?</h3>
      <p>Yes, you can upload multiple images and merge them into a single PDF.</p>
    </div>

    <div>
      <h3 className="font-semibold">Is my data secure?</h3>
      <p>Your files are processed securely and are not stored permanently.</p>
    </div>
  </div>
</section>
    </main>
    </>
  );
}
