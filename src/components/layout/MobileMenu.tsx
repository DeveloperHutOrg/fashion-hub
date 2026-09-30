"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { X, Search, Heart, ShoppingBag, ArrowRight } from "lucide-react";

export default function MobileMenu() {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    setIsSearchOpen,
    setIsWishlistOpen,
    setIsCartOpen,
    wishlist,
    totalItems,
  } = useCart();

  if (!isMobileMenuOpen) return null;

  const navLinks = [
    { label: "Women", href: "/shop?category=Women" },
    { label: "Men", href: "/shop?category=Men" },
    { label: "New Arrivals", href: "/shop?filter=new" },
    { label: "Collections", href: "/shop" },
    { label: "Sale", href: "/shop?filter=sale", highlight: true },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-[#FAF8F5] text-[#121212] flex flex-col justify-between shadow-2xl z-10 border-r border-[#E5DFD5]">
        {/* Top Header */}
        <div>
          <div className="px-6 py-5 border-b border-[#E5DFD5] flex items-center justify-between">
            <span className="font-serif text-lg tracking-[0.2em] uppercase font-semibold">
              FASHION HUB
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 text-[#121212]/60 hover:text-[#121212]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Quick Actions Bar */}
          <div className="grid grid-cols-3 border-b border-[#E5DFD5] text-center text-xs divide-x divide-[#E5DFD5]">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="py-3 flex flex-col items-center gap-1 hover:bg-[#F2EDE4] transition-colors"
            >
              <Search className="w-4 h-4 stroke-[1.5]" />
              <span className="text-[10px] tracking-wider uppercase">Search</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsWishlistOpen(true);
              }}
              className="py-3 flex flex-col items-center gap-1 hover:bg-[#F2EDE4] transition-colors relative"
            >
              <Heart className="w-4 h-4 stroke-[1.5]" />
              <span className="text-[10px] tracking-wider uppercase">
                Saved ({wishlist.length})
              </span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="py-3 flex flex-col items-center gap-1 hover:bg-[#F2EDE4] transition-colors relative"
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
              <span className="text-[10px] tracking-wider uppercase">
                Bag ({totalItems})
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3.5 border-b border-[#E5DFD5]/50 font-serif text-lg tracking-wide transition-colors ${
                  link.highlight
                    ? "text-[#72202B] font-medium"
                    : "text-[#121212] hover:text-[#72202B]"
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Editorial Highlight */}
        <div className="p-6 bg-[#F2EDE4] border-t border-[#E5DFD5] space-y-3">
          <p className="text-[10px] uppercase tracking-widest text-[#6B7280]">
            Autumn / Winter 2026
          </p>
          <p className="font-serif text-sm italic text-[#121212]/90">
            &ldquo;Curated fashion for those who create their own identity.&rdquo;
          </p>
          <div className="pt-2 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#6B7280]">
            <span>Complimentary Express Courier</span>
            <span>Worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
}
