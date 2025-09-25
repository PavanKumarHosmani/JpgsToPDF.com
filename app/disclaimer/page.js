export const metadata = {
  title: "Disclaimer | JPGSTOPDF.COM",
  description:
    "Read the disclaimer for JPGSTOPDF.COM. Learn about limitations, liability, and proper usage of our free online JPG to PDF converter.",
};

export default function DisclaimerPage() {
  const pageUrl = "https://jpgstopdf.com/disclaimer";

  return (
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Disclaimer</h1>
      <p className="text-gray-700 mb-2">
        JPGSTOPDF.COM provides a free online tool to convert JPG, PNG, and WebP
        images to PDF. While we strive to ensure accuracy and reliability, we do
        not guarantee that the service is error-free or uninterrupted.
      </p>
      <p className="text-gray-700 mb-2">
        By using our website, you agree that JPGSTOPDF.COM shall not be held
        liable for any loss or damage arising from the use of our service.
      </p>
      <p className="text-gray-700">
        All uploaded files are processed securely, and we do not store or share
        your images beyond temporary processing.
      </p>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: pageUrl,
            name: "Disclaimer - JPGSTOPDF.COM",
          }),
        }}
      />
    </main>
  );
}
