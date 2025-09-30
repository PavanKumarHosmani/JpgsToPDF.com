import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-2xl font-bold">
          JPGStoPDF
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/aboutus" className="hover:underline">About Us</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/TermsandConditions" className="hover:underline">Terms and Conditions</Link>
          <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
        </nav>
      </div>
    </header>
  );
}
