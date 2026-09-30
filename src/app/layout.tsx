import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import WishlistDrawer from "@/components/wishlist/WishlistDrawer";
import SearchModal from "@/components/search/SearchModal";
import MobileMenu from "@/components/layout/MobileMenu";
import Toast from "@/components/ui/Toast";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FASHION HUB | Modern Luxury Editorial Fashion",
  description:
    "Curated fashion for those who create their own identity. Modern sartorial silhouettes, natural noble fibers, and enduring craftsmanship.",
  keywords: [
    "luxury fashion",
    "editorial clothing",
    "minimalist fashion",
    "designer tailoring",
    "linen shirts",
    "leather jacket",
    "wide-leg trousers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#121212]">
        <CartProvider>
          {/* Top Sticky Header */}
          <Navbar />

          {/* Main Route Content */}
          <main className="flex-1 w-full">{children}</main>

          {/* Slide-out & Overlay Drawers */}
          <CartDrawer />
          <WishlistDrawer />
          <SearchModal />
          <MobileMenu />

          {/* Interactive Toasts */}
          <Toast />

          {/* Editorial Footer */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
