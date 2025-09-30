import UploadForm from "../components/UploadForm";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center relative px-6 py-12">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">
          Free Online JPG to PDF Converter
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Convert JPG, PNG, and WebP images to PDF instantly. Adjust page
          orientation, set margins, merge multiple files into a single PDF,
          and download high-quality PDFs securely online for free. Our online
          converter is fast, safe, and works on any device without installation
          or registration. Whether you need a single file or want to merge
          multiple images, JPGStoPDF makes it simple and reliable for all users.
        </p>
      </section>

      <UploadForm autoDownload={true} />

      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Why Choose JPGStoPDF?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Convert JPG, PNG, WebP to PDF instantly.</li>
          <li>Merge multiple images into a single PDF.</li>
          <li>Adjust page orientation and margins.</li>
          <li>Fast, secure, and works on all devices.</li>
          <li>No installation or registration required.</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          How It Works
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Upload images using the form above.</li>
          <li>Arrange them in the order you want.</li>
          <li>Click "Convert" to generate a PDF.</li>
          <li>Download your PDF securely.</li>
        </ol>
      </section>

      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          About JPGStoPDF
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          JPGStoPDF is a free online tool that allows you to convert your images
          (JPG, PNG, WebP) to PDF format within seconds. You can merge multiple
          images, adjust page orientation, set margins, and create professional-quality
          PDFs without installing any software. Our service is fast, secure, and works
          on any device – desktop, tablet, or mobile. No registration is required,
          and your files are automatically deleted after processing to protect your privacy.
        </p>
      </section>
    </main>
  );
}
