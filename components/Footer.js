export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-5xl mx-auto text-center space-y-2">
        <p>© {new Date().getFullYear()} JPGSTOPDF.COM </p>
        <div className="flex justify-center space-x-6">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/Terms&Conditions" className="hover:underline">Terms and Conditions</a>
          <a href="/disclaimer" className="hover:underline">Disclaimer</a>
          <a href="/sitemap.xml" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
