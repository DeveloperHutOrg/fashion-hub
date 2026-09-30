"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    freeShippingThreshold,
    totalItems,
  } = useCart();

  if (!isCartOpen) return null;

  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] text-[#121212] flex flex-col shadow-2xl border-l border-[#E5DFD5]">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#E5DFD5] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 stroke-[1.5] text-[#121212]" />
              <h2 className="font-serif text-lg tracking-wide uppercase font-medium">
                Shopping Bag ({totalItems})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#121212]/60 hover:text-[#121212] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Free Shipping Tracker */}
          <div className="bg-[#F2EDE4] px-6 py-3.5 border-b border-[#E5DFD5]">
            <p className="text-xs uppercase tracking-wider text-[#121212]/80">
              {amountToFreeShipping > 0 ? (
                <>
                  Add <span className="font-semibold text-[#72202B]">${amountToFreeShipping.toFixed(0)}</span> for complimentary express shipping
                </>
              ) : (
                <span className="font-medium text-[#72202B]">
                  ✓ You have unlocked complimentary express shipping
                </span>
              )}
            </p>
            <div className="w-full bg-[#E5DFD5] h-1.5 mt-2 rounded-full overflow-hidden">
              <div
                className="bg-[#72202B] h-full transition-all duration-500 ease-out"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#E5DFD5]/60">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#F2EDE4] flex items-center justify-center mb-4 text-[#121212]/40">
                  <ShoppingBag className="w-8 h-8 stroke-[1.2]" />
                </div>
                <h3 className="font-serif text-xl tracking-tight mb-2">
                  Your bag is empty
                </h3>
                <p className="text-sm text-[#6B7280] max-w-xs mb-6">
                  Discover refined tailoring, iconic silhouettes, and current season arrivals.
                </p>
                <Link
                  href="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 bg-[#121212] text-[#FAF8F5] px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-[#72202B] transition-colors"
                >
                  Explore Collection
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex gap-4">
                  <Link
                    href={`/product/${item.product.slug}`}
                    onClick={() => setIsCartOpen(false)}
                    className="relative w-20 h-28 bg-[#F2EDE4] shrink-0 overflow-hidden"
                  >
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </Link>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link
                          href={`/product/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif text-sm font-medium hover:text-[#72202B] transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#6B7280] hover:text-[#72202B] transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="mt-1 text-xs text-[#6B7280] space-y-0.5">
                        <p>Color: <span className="text-[#121212]">{item.selectedColor}</span></p>
                        <p>Size: <span className="text-[#121212]">{item.selectedSize}</span></p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity stepper */}
                      <div className="flex items-center border border-[#E5DFD5] bg-[#FDFBF7]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-[#F2EDE4] transition-colors text-[#121212]/70"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-medium min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-[#F2EDE4] transition-colors text-[#121212]/70"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-medium tracking-tight">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="border-t border-[#E5DFD5] p-6 bg-[#FDFBF7] space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-[#6B7280]">
                  <span>Subtotal</span>
                  <span className="text-[#121212] font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#6B7280]">
                  <span>Estimated Shipping</span>
                  <span className="text-[#121212] font-medium">
                    {amountToFreeShipping === 0 ? "Complimentary" : "$15.00"}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-serif pt-2 border-t border-[#E5DFD5]">
                  <span className="uppercase tracking-wider">Total</span>
                  <span className="font-semibold">
                    ${(subtotal + (amountToFreeShipping === 0 ? 0 : 15)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert("Thank you for shopping at FASHION HUB! Demo checkout initiated.");
                  setIsCartOpen(false);
                }}
                className="w-full bg-[#121212] text-[#FAF8F5] py-3.5 px-4 text-xs font-medium uppercase tracking-widest hover:bg-[#72202B] transition-colors flex items-center justify-center gap-2 group"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B7280] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#72202B]" />
                <span>Complimentary returns & insured worldwide courier</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
