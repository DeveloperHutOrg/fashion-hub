"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { Search, X, ArrowRight } from "lucide-react";

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      })
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsSearchOpen(false);
      router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const trendingTerms = [
    "Tailored Blazer",
    "Linen Shirt",
    "Leather Jacket",
    "Silk Slip Dress",
    "Wide-Leg Trousers",
    "Cashmere",
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="relative min-h-screen flex items-start justify-center pt-20 px-4 sm:px-6">
        <div className="relative w-full max-w-3xl bg-[#FAF8F5] text-[#121212] shadow-2xl border border-[#E5DFD5] p-6 sm:p-8">
          {/* Close button */}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 p-2 text-[#121212]/60 hover:text-[#121212] transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Search form */}
          <form onSubmit={handleSearchSubmit} className="relative mt-2">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-[#121212]/50 stroke-[1.5]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH SILHOUETTES, FABRICS, PIECES..."
              className="w-full bg-transparent border-b border-[#121212] py-4 pl-10 pr-12 font-serif text-lg sm:text-xl placeholder:text-[#121212]/40 focus:outline-none focus:border-[#72202B] uppercase tracking-wider"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wider text-[#6B7280] hover:text-[#121212]"
              >
                Clear
              </button>
            )}
          </form>

          {/* Trending Searches */}
          {!query && (
            <div className="mt-8 pt-4">
              <p className="text-xs uppercase tracking-widest text-[#6B7280] font-medium mb-3">
                Trending Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {trendingTerms.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 bg-[#F2EDE4] hover:bg-[#121212] hover:text-[#FAF8F5] transition-all text-xs tracking-wide text-[#121212]/80"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {query && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#E5DFD5]">
                <p className="text-xs uppercase tracking-widest text-[#6B7280]">
                  Found {filteredProducts.length} style{filteredProducts.length === 1 ? "" : "s"}
                </p>
                {filteredProducts.length > 0 && (
                  <button
                    onClick={handleSearchSubmit}
                    className="text-xs uppercase tracking-widest font-medium text-[#72202B] hover:underline flex items-center gap-1"
                  >
                    View all in shop <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>

              {filteredProducts.length === 0 ? (
                <div className="py-12 text-center text-[#6B7280]">
                  <p className="font-serif text-lg text-[#121212]">No results found for &ldquo;{query}&rdquo;</p>
                  <p className="text-xs mt-1">Try checking your spelling or search by category like &ldquo;Blazer&rdquo; or &ldquo;Trousers&rdquo;.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto pr-1">
                  {filteredProducts.slice(0, 6).map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center gap-4 p-2.5 hover:bg-[#F2EDE4] transition-colors group"
                    >
                      <div className="relative w-16 h-20 bg-[#E5DFD5] shrink-0 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#6B7280]">
                          {product.category} · {product.subcategory}
                        </span>
                        <h4 className="font-serif text-sm font-medium group-hover:text-[#72202B] transition-colors line-clamp-1">
                          {product.name}
                        </h4>
                        <p className="text-xs font-medium mt-1">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
