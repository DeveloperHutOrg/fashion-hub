"use client";

import { useCart } from "@/context/CartContext";
import { Check, X } from "lucide-react";

export default function Toast() {
  const { toastMessage, showToast } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
      <div className="bg-[#121212] text-[#FAF8F5] px-4 py-3.5 shadow-2xl flex items-center justify-between border-l-2 border-[#72202B]">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#72202B] flex items-center justify-center shrink-0 text-white">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <p className="text-xs uppercase tracking-wider font-medium text-[#FAF8F5]">
            {toastMessage}
          </p>
        </div>
        <button
          onClick={() => showToast("")}
          className="text-[#FAF8F5]/60 hover:text-[#FAF8F5] transition-colors ml-3"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
