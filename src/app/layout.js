import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export const metadata = {
  title: "TaksinBurada",
  description:
    "TaksinBurada ile güvenli, hızlı ve konforlu taksi hizmetine dakikalar içinde ulaşın. İstanbul’un her noktasına kolay ulaşım sağlayın.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ScrollToTop />
        <Navbar />

        <main className="pt-12.5 md:pt-15">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}