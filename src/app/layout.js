import "./globals.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Button from "@/components/Button";

export default function RootLayout({ chrildren }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav />

        <Footer />
      </body>
    </html>
  );
}
