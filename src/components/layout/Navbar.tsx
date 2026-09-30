"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const {
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsMobileMenuOpen,
    totalItems,
    wishlist,
  } = useCart();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On home page at top, transparent with white/crisp text over hero, or subtle glass.
  // When scrolled or on inner pages, rich ivory solid background with clean borders.
  const navbarClasses = isHomePage && !isScrolled
    ? "bg-transparent text-white border-transparent"
    : "bg-[#FAF8F5]/95 backdrop-blur-md text-[#121212] border-b border-[#E5DFD5] shadow-xs";

  const linkHoverClass = isHomePage && !isScrolled
    ? "hover:text-[#FAF8F5]/70"
    : "hover:text-[#72202B]";

  const activeUnderline = isHomePage && !isScrolled
    ? "bg-white"
    : "bg-[#72202B]";

  const navLinks = [
    { label: "Women", href: "/shop?category=Women" },
    { label: "Men", href: "/shop?category=Men" },
    { label: "New Arrivals", href: "/shop?filter=new" },
    { label: "Collections", href: "/shop" },
    { label: "Sale", href: "/shop?filter=sale", isSale: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navbarClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile: Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Left: Desktop Brand Wordmark / Mobile Centered */}
          <div className="flex items-center">
            <Link
              href="/"
              className="font-serif text-xl sm:text-2xl font-bold tracking-[0.25em] uppercase hover:opacity-85 transition-opacity"
            >
              FASHION HUB
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 text-xs uppercase tracking-[0.2em] font-medium transition-colors group ${linkHoverClass} ${
                  item.isSale ? "text-[#72202B] font-semibold" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${activeUnderline}`}
                />
              </Link>
            ))}
          </nav>

          {/* Right: Search, Account, Wishlist, Bag */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 transition-colors ${linkHoverClass}`}
              aria-label="Search collection"
            >
              <Search className="w-4 h-4 stroke-[1.5]" />
            </button>

            {/* Account (desktop) */}
            <Link
              href="/shop"
              className={`hidden sm:block p-2 transition-colors ${linkHoverClass}`}
              aria-label="Account"
            >
              <User className="w-4 h-4 stroke-[1.5]" />
            </Link>

            {/* Wishlist */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className={`relative p-2 transition-colors ${linkHoverClass}`}
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 stroke-[1.5]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#72202B] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag / Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 transition-colors ${linkHoverClass}`}
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#72202B] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
