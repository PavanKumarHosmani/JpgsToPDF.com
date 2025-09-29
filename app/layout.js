import "./styles/globals.css";

export const metadata = {
  title: "JPGStoPDF | Convert Images to PDF",
  description: "Free online JPG to PDF converter with secure and fast processing.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
