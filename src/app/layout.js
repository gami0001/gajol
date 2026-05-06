import "./globals.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function RootLayout() {
  return (
    <html>
      <body>
        <Nav />
        <Footer />
      </body>
    </html>
  );
}
