import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-5xl mx-auto text-center space-y-2">
        <p>© {new Date().getFullYear()} JPGSTOPDF.COM</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/termsandconditions" className="hover:underline">Terms & Conditions</Link>
          <Link href="/aboutus" className="hover:underline">About Us</Link>
          <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/sitemap.xml" className="hover:underline">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
