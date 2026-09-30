"use client";

import { useRef } from "react";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { getTrendingProducts } from "@/data/products";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function TrendingNow() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trendingProducts = getTrendingProducts().slice(0, 6);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Carousel Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#72202B] font-semibold">
              Currently Coveted
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#121212] uppercase mt-2">
              Trending Now
            </h2>
            <p className="mt-1 text-sm text-[#6B7280] font-light">
              Most sought-after investment pieces of the season.
            </p>
          </div>

          <div className="mt-6 sm:mt-0 flex items-center gap-3">
            <Link
              href="/shop"
              className="mr-3 text-xs uppercase tracking-[0.2em] font-medium text-[#121212] hover:text-[#72202B] transition-colors hidden md:flex items-center gap-1.5"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-[#E5DFD5] hover:border-[#121212] hover:bg-[#121212] hover:text-[#FAF8F5] transition-all flex items-center justify-center text-[#121212]"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-[#E5DFD5] hover:border-[#121212] hover:bg-[#121212] hover:text-[#FAF8F5] transition-all flex items-center justify-center text-[#121212]"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Horizontally Scrollable Product Reel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="w-[260px] sm:w-[300px] shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
