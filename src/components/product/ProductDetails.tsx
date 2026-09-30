"use client";

import { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import SizeGuideModal from "@/components/product/SizeGuideModal";
import StickyPurchaseBar from "@/components/product/StickyPurchaseBar";
import {
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  Truck,
  RotateCcw,
  ShieldCheck,
  ChevronDown,
  Sparkles,
} from "lucide-react";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart, toggleWishlist, isInWishlist, setIsCartOpen } = useCart();
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]?.name || "Standard"
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0] || "One Size"
  );
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("details");

  const isLiked = isInWishlist(product.id);

  const handleAdd = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setIsCartOpen(true);
  };

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <>
      <div className="flex flex-col space-y-8">
        {/* Category & Rating */}
        <div>
          <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#6B7280] mb-2">
            <span>
              {product.category} · {product.subcategory}
            </span>
            <div className="flex items-center gap-1.5 text-[#121212]">
              <span className="text-[#72202B]">★</span>
              <span className="font-medium">{product.rating}</span>
              <span className="text-[#6B7280]">({product.reviewCount} reviews)</span>
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121212] tracking-tight uppercase leading-tight">
            {product.name}
          </h1>

          {/* Pricing */}
          <div className="mt-4 flex items-baseline gap-3">
            <span
              className={`text-2xl font-serif font-medium ${
                product.sale ? "text-[#72202B]" : "text-[#121212]"
              }`}
            >
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-base text-[#6B7280] line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
            {product.sale && product.oldPrice && (
              <span className="text-xs uppercase tracking-wider bg-[#72202B]/10 text-[#72202B] px-2 py-0.5 font-medium">
                Save ${(product.oldPrice - product.price).toFixed(0)}
              </span>
            )}
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-[#6B7280] font-light leading-relaxed">
          {product.description}
        </p>

        {/* Color Selector */}
        <div className="pt-2">
          <div className="flex justify-between items-center text-xs uppercase tracking-wider mb-3">
            <span className="text-[#6B7280]">Color:</span>
            <span className="font-medium text-[#121212]">{selectedColor}</span>
          </div>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`relative w-8 h-8 rounded-full border transition-all ${
                  selectedColor === color.name
                    ? "ring-2 ring-[#121212] ring-offset-2 border-[#121212]"
                    : "border-black/20 hover:scale-105"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                aria-label={`Select ${color.name}`}
              />
            ))}
          </div>
        </div>

        {/* Size Selector & Size Guide Link */}
        <div className="pt-2">
          <div className="flex justify-between items-center text-xs uppercase tracking-wider mb-3">
            <span className="text-[#6B7280]">Size</span>
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="text-[#72202B] hover:underline font-medium cursor-pointer"
            >
              Size Guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2.5 text-xs font-medium tracking-wider transition-all min-w-[48px] text-center border ${
                  selectedSize === size
                    ? "bg-[#121212] text-[#FAF8F5] border-[#121212]"
                    : "bg-[#FDFBF7] text-[#121212] border-[#E5DFD5] hover:border-[#121212]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & CTA Buttons */}
        <div className="pt-4 space-y-3">
          <div className="flex items-center gap-4">
            {/* Quantity Stepper */}
            <div className="flex items-center border border-[#E5DFD5] bg-[#FDFBF7]">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3.5 py-3 text-[#121212]/70 hover:bg-[#F2EDE4] transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-4 text-xs font-medium text-center min-w-[32px]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3.5 py-3 text-[#121212]/70 hover:bg-[#F2EDE4] transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Bag Button */}
            <button
              onClick={handleAdd}
              className="flex-1 bg-[#121212] text-[#FAF8F5] hover:bg-[#72202B] py-3.5 px-6 text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-2 transition-all shadow-md group"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className="w-12 h-12 border border-[#E5DFD5] hover:border-[#121212] flex items-center justify-center transition-colors bg-[#FDFBF7]"
              aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                className={`w-5 h-5 ${
                  isLiked
                    ? "text-[#72202B] fill-[#72202B] stroke-[1.5]"
                    : "text-[#121212] stroke-[1.5]"
                }`}
              />
            </button>
          </div>

          {/* Buy Now Full Width */}
          <button
            onClick={handleBuyNow}
            className="w-full bg-[#72202B] hover:bg-[#55161F] text-[#FAF8F5] py-3.5 px-6 text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-md"
          >
            Buy Now
          </button>
        </div>

        {/* Perks Bar */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6B7280] border-t border-[#E5DFD5]">
          <div className="flex items-center gap-2.5">
            <Truck className="w-4 h-4 text-[#72202B] shrink-0" />
            <span>Complimentary express delivery over $250</span>
          </div>
          <div className="flex items-center gap-2.5">
            <RotateCcw className="w-4 h-4 text-[#72202B] shrink-0" />
            <span>30-day complimentary returns</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#72202B] shrink-0" />
            <span>Authentic artisanal guarantee</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#72202B] shrink-0" />
            <span>Signature archival packaging</span>
          </div>
        </div>

        {/* Accordions: Details, Material, Shipping & Returns */}
        <div className="divide-y divide-[#E5DFD5] border-y border-[#E5DFD5] text-xs">
          {/* Details */}
          <div>
            <button
              onClick={() => toggleAccordion("details")}
              className="w-full py-4 flex items-center justify-between text-left font-serif uppercase tracking-wider text-sm font-medium text-[#121212]"
            >
              <span>Product Details & Cut</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openAccordion === "details" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "details" && (
              <ul className="pb-4 space-y-2 text-[#6B7280] list-disc list-inside">
                {product.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Material & Care */}
          <div>
            <button
              onClick={() => toggleAccordion("material")}
              className="w-full py-4 flex items-center justify-between text-left font-serif uppercase tracking-wider text-sm font-medium text-[#121212]"
            >
              <span>Fabric & Sustainable Care</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openAccordion === "material" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "material" && (
              <div className="pb-4 space-y-2 text-[#6B7280]">
                <p>
                  <strong className="text-[#121212]">Material:</strong>{" "}
                  {product.material}
                </p>
                <p>
                  <strong className="text-[#121212]">Care Instructions:</strong>{" "}
                  {product.care}
                </p>
              </div>
            )}
          </div>

          {/* Shipping & Returns */}
          <div>
            <button
              onClick={() => toggleAccordion("shipping")}
              className="w-full py-4 flex items-center justify-between text-left font-serif uppercase tracking-wider text-sm font-medium text-[#121212]"
            >
              <span>Delivery & Returns Policy</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openAccordion === "shipping" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "shipping" && (
              <div className="pb-4 space-y-2 text-[#6B7280]">
                <p>
                  Orders placed by 2:00 PM CET are dispatched the same day via climate-neutral DHL Express courier.
                </p>
                <p>
                  We offer 30-day complimentary door-to-door returns for all unworn garments in original condition with security tags intact.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar for Mobile Purchase */}
      <StickyPurchaseBar
        product={product}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        quantity={quantity}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={product.category}
      />
    </>
  );
}
