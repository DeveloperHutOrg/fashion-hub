"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { Heart, Plus, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { toggleWishlist, isInWishlist, addToCart } = useCart();
  const [isQuickAdding, setIsQuickAdding] = useState(false);
  const [selectedQuickSize, setSelectedQuickSize] = useState<string | null>(null);
  const [showSizes, setShowSizes] = useState(false);

  const isLiked = isInWishlist(product.id);

  const handleQuickAdd = (size: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsQuickAdding(true);
    addToCart(product, size);
    setTimeout(() => {
      setIsQuickAdding(false);
      setShowSizes(false);
    }, 600);
  };

  return (
    <div className="group relative flex flex-col bg-[#FAF8F5]">
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F2EDE4]">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Badges: New / Sale */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.newArrival && (
            <span className="bg-[#121212] text-[#FAF8F5] text-[10px] uppercase tracking-widest font-medium px-2 py-0.5">
              New
            </span>
          )}
          {product.sale && (
            <span className="bg-[#72202B] text-[#FAF8F5] text-[10px] uppercase tracking-widest font-medium px-2 py-0.5">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/80 backdrop-blur-xs flex items-center justify-center hover:bg-white transition-all text-[#121212]"
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isLiked
                ? "text-[#72202B] fill-[#72202B] stroke-[1.5]"
                : "text-[#121212] stroke-[1.5]"
            }`}
          />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-3 bottom-3 z-10 transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
          {!showSizes ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (product.sizes.length === 1) {
                  handleQuickAdd(product.sizes[0], e);
                } else {
                  setShowSizes(true);
                }
              }}
              className="w-full bg-[#121212]/90 backdrop-blur-xs text-[#FAF8F5] hover:bg-[#72202B] py-2.5 px-3 text-[11px] uppercase tracking-widest font-medium flex items-center justify-center gap-1.5 transition-colors shadow-lg"
            >
              <Plus className="w-3.5 h-3.5" />
              Quick Add
            </button>
          ) : (
            <div className="bg-[#121212]/95 backdrop-blur-md p-2 shadow-xl flex flex-wrap items-center justify-center gap-1.5">
              <span className="w-full text-center text-[10px] uppercase tracking-widest text-[#FAF8F5]/60 mb-1">
                Select Size
              </span>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => handleQuickAdd(size, e)}
                  disabled={isQuickAdding}
                  className="px-2.5 py-1 text-[11px] font-medium bg-[#FAF8F5]/10 hover:bg-[#72202B] text-white transition-colors min-w-[28px] text-center"
                >
                  {isQuickAdding && selectedQuickSize === size ? (
                    <Check className="w-3 h-3 inline" />
                  ) : (
                    size
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Information */}
      <div className="pt-3.5 pb-2 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#6B7280]">
            <span>{product.category} · {product.subcategory}</span>
            {product.rating && (
              <span className="text-[11px] text-[#121212]/70 font-sans">
                ★ {product.rating}
              </span>
            )}
          </div>

          <Link
            href={`/product/${product.slug}`}
            className="block mt-1 font-serif text-base font-medium text-[#121212] hover:text-[#72202B] transition-colors leading-snug line-clamp-1"
          >
            {product.name}
          </Link>
        </div>

        {/* Pricing */}
        <div className="mt-2 flex items-center gap-2 text-sm font-medium">
          <span className={product.sale ? "text-[#72202B]" : "text-[#121212]"}>
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-[#6B7280] line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
