import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#FAF8F5] pt-20 pb-12 border-t border-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Statement Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FAF8F5]/10">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] uppercase font-bold text-[#FAF8F5]">
              FASHION HUB
            </h2>
            <p className="text-sm font-serif italic text-[#FAF8F5]/70 max-w-sm">
              Modern fashion for modern identities.
            </p>
            <p className="text-xs text-[#FAF8F5]/50 max-w-md leading-relaxed">
              Curating architectural silhouettes, natural noble fibers, and enduring craftsmanship since 2026. Designed for timeless wardrobes.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* SHOP */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF8F5]">
                Shop
              </h3>
              <ul className="space-y-2.5 text-xs text-[#FAF8F5]/60">
                <li>
                  <Link href="/shop?category=Women" className="hover:text-[#FAF8F5] transition-colors">
                    Women
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=Men" className="hover:text-[#FAF8F5] transition-colors">
                    Men
                  </Link>
                </li>
                <li>
                  <Link href="/shop?filter=new" className="hover:text-[#FAF8F5] transition-colors">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-[#FAF8F5] transition-colors">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/shop?filter=sale" className="text-[#8E2B3A] hover:text-[#FAF8F5] transition-colors">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>

            {/* HELP */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF8F5]">
                Help
              </h3>
              <ul className="space-y-2.5 text-xs text-[#FAF8F5]/60">
                <li>
                  <Link href="/shop" className="hover:text-[#FAF8F5] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-[#FAF8F5] transition-colors">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-[#FAF8F5] transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-[#FAF8F5] transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-[#FAF8F5] transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* ABOUT */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF8F5]">
                About
              </h3>
              <ul className="space-y-2.5 text-xs text-[#FAF8F5]/60">
                <li>
                  <Link href="/shop" className="hover:text-[#FAF8F5] transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-[#FAF8F5] transition-colors">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-[#FAF8F5] transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF8F5]">
                Social
              </h3>
              <ul className="space-y-2.5 text-xs text-[#FAF8F5]/60">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1 group"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1 group"
                  >
                    <span>Facebook</span>
                    <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1 group"
                  >
                    <span>Pinterest</span>
                    <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1 group"
                  >
                    <span>TikTok</span>
                    <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF8F5]/40 space-y-4 sm:space-y-0">
          <p>© 2026 Fashion Hub. All rights reserved.</p>
          <div className="flex space-x-6 text-[11px] tracking-wider uppercase">
            <span className="hover:text-[#FAF8F5] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#FAF8F5] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#FAF8F5] cursor-pointer">Cookie Preferences</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
