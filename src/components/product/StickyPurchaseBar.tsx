"use client";

import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

interface StickyPurchaseBarProps {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export default function StickyPurchaseBar({
  product,
  selectedSize,
  selectedColor,
  quantity,
}: StickyPurchaseBarProps) {
  const { addToCart } = useCart();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E5DFD5] p-3 px-4 shadow-xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="truncate">
          <p className="font-serif text-sm font-medium truncate text-[#121212]">
            {product.name}
          </p>
          <p className="text-xs text-[#6B7280]">
            ${product.price.toFixed(2)} · Size {selectedSize}
          </p>
        </div>

        <button
          onClick={() => addToCart(product, selectedSize, selectedColor, quantity)}
          className="shrink-0 bg-[#121212] text-[#FAF8F5] hover:bg-[#72202B] py-2.5 px-5 text-xs uppercase tracking-widest font-medium flex items-center gap-1.5 transition-colors shadow-md"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
}
