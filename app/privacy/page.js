export const metadata = {
  title: "Privacy Policy | JPGSTOPDF.COM",
  description: "Read the privacy policy of JPGSTOPDF.COM. Learn how we handle your data, ensure file security, and respect user privacy.",
};

export default function PrivacyPage() {
  const pageUrl = "https://wwww.jpgstopdf.com/privacy";

  return (
    <>
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-gray-700 mb-2">
        At JPGSTOPDF.COM, we respect your privacy. We do not store or share your uploaded images. All conversions are processed securely and temporarily.
      </p>
      <p className="text-gray-700 mb-2">
        Temporary storage is used only to process your images and generate PDFs, after which files are deleted automatically.
      </p>
      <p className="text-gray-700">
        By using our service, you agree to our privacy practices and terms of use.
      </p>

      {/* JSON-LD structured data for WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: pageUrl,
            name: "Privacy Policy - JPGSTOPDF.COM",
          }),
        }}
      />
    </main>
    </>
  );
}
