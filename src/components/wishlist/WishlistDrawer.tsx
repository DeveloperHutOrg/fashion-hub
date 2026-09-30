"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { X, Heart, ShoppingBag, ArrowRight } from "lucide-react";

export default function WishlistDrawer() {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
  } = useCart();

  if (!isWishlistOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] text-[#121212] flex flex-col shadow-2xl border-l border-[#E5DFD5]">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#E5DFD5] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 stroke-[1.5] text-[#72202B] fill-[#72202B]" />
              <h2 className="font-serif text-lg tracking-wide uppercase font-medium">
                Saved Items ({wishlistProducts.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 text-[#121212]/60 hover:text-[#121212] transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#E5DFD5]/60">
            {wishlistProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#F2EDE4] flex items-center justify-center mb-4 text-[#72202B]">
                  <Heart className="w-8 h-8 stroke-[1.2]" />
                </div>
                <h3 className="font-serif text-xl tracking-tight mb-2">
                  No saved items
                </h3>
                <p className="text-sm text-[#6B7280] max-w-xs mb-6">
                  Save your favorite silhouettes and statement pieces to revisit anytime.
                </p>
                <Link
                  href="/shop"
                  onClick={() => setIsWishlistOpen(false)}
                  className="inline-flex items-center gap-2 bg-[#121212] text-[#FAF8F5] px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-[#72202B] transition-colors"
                >
                  Discover Pieces
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div key={product.id} className="py-4 flex gap-4">
                  <Link
                    href={`/product/${product.slug}`}
                    onClick={() => setIsWishlistOpen(false)}
                    className="relative w-20 h-28 bg-[#F2EDE4] shrink-0 overflow-hidden"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </Link>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link
                          href={`/product/${product.slug}`}
                          onClick={() => setIsWishlistOpen(false)}
                          className="font-serif text-sm font-medium hover:text-[#72202B] transition-colors line-clamp-1"
                        >
                          {product.name}
                        </Link>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-[#6B7280] hover:text-[#72202B] transition-colors p-1"
                          aria-label="Remove from wishlist"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-[#6B7280] mt-0.5">{product.category}</p>
                      <p className="text-sm font-medium mt-1">${product.price.toFixed(2)}</p>
                    </div>

                    <div className="mt-3">
                      <button
                        onClick={() => {
                          addToCart(product);
                          toggleWishlist(product.id);
                        }}
                        className="w-full bg-[#121212] text-[#FAF8F5] hover:bg-[#72202B] py-2 text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Move to Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
