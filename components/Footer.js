import Link from "next/link";
import Script from "next/script";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        {/* Copyright */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} JPGStoPDF.COM. All rights reserved.
        </p>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/TermsandConditions" className="hover:underline">Terms & Conditions</Link>
          <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/aboutus" className="hover:underline">About Us</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/sitemap.xml" className="hover:underline">Sitemap</Link>
        </div>

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', { page_path: window.location.pathname });
          `}
        </Script>
      </div>
    </footer>
  );
}
