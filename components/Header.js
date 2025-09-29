import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-6 shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <h1 className="text-2xl font-bold mb-2 md:mb-0">
          <Link href="/">JPGSTOPDF.COM</Link>
        </h1>
        <nav className="flex flex-wrap justify-center gap-4 text-white">
          <Link href="/">Home</Link>
          <Link href="/aboutus">About Us</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/termsandconditions">Terms & Conditions</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
