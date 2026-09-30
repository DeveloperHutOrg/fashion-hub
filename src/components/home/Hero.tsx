"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToExplore = () => {
    const el = document.getElementById("new-arrivals");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#121212]">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          alt="High fashion editorial model"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top filter brightness-[0.78] contrast-[1.08] transition-transform duration-1000 scale-100"
        />
        {/* Subtle editorial vignettes and gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
      </div>

      {/* Editorial Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-[#FAF8F5] flex flex-col items-center">
        {/* Sub-label */}
        <span className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#FAF8F5]/80 mb-4 sm:mb-6 font-medium animate-in fade-in slide-in-from-top-4 duration-700">
          Autumn / Winter 2026 Edition
        </span>

        {/* Major Fashion Heading */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight uppercase leading-[0.95] max-w-4xl drop-shadow-md">
          Define Your Style.
        </h1>

        {/* Supporting text */}
        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-[#FAF8F5]/85 max-w-xl font-light tracking-wide leading-relaxed">
          Curated fashion for those who create their own identity.
        </p>

        {/* High-end Dual Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/shop?category=Women"
            className="w-full sm:w-52 py-4 px-8 text-xs uppercase tracking-[0.25em] font-medium bg-[#FAF8F5] text-[#121212] hover:bg-[#72202B] hover:text-[#FAF8F5] transition-all duration-300 shadow-xl text-center"
          >
            Shop Women
          </Link>
          <Link
            href="/shop?category=Men"
            className="w-full sm:w-52 py-4 px-8 text-xs uppercase tracking-[0.25em] font-medium bg-black/40 backdrop-blur-md text-[#FAF8F5] border border-white/40 hover:bg-white hover:text-[#121212] transition-all duration-300 shadow-xl text-center"
          >
            Shop Men
          </Link>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <button
        onClick={scrollToExplore}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#FAF8F5]/70 hover:text-[#FAF8F5] flex flex-col items-center gap-2 transition-colors cursor-pointer group"
        aria-label="Scroll to new arrivals"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#FAF8F5]" />
      </button>
    </section>
  );
}
