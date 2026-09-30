"use client";

import { X, Check } from "lucide-react";
import { useState } from "react";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

export default function SizeGuideModal({
  isOpen,
  onClose,
  category,
}: SizeGuideModalProps) {
  const [unit, setUnit] = useState<"cm" | "in">("cm");

  if (!isOpen) return null;

  const measurements = [
    { size: "XS / 34", bust: unit === "cm" ? "82-85" : "32-33.5", waist: unit === "cm" ? "64-67" : "25-26.5", hips: unit === "cm" ? "88-91" : "34.5-36" },
    { size: "S / 36", bust: unit === "cm" ? "86-89" : "34-35", waist: unit === "cm" ? "68-71" : "27-28", hips: unit === "cm" ? "92-95" : "36.5-37.5" },
    { size: "M / 38", bust: unit === "cm" ? "90-93" : "35.5-36.5", waist: unit === "cm" ? "72-75" : "28.5-29.5", hips: unit === "cm" ? "96-99" : "38-39" },
    { size: "L / 40", bust: unit === "cm" ? "94-98" : "37-38.5", waist: unit === "cm" ? "76-80" : "30-31.5", hips: unit === "cm" ? "100-104" : "39.5-41" },
    { size: "XL / 42", bust: unit === "cm" ? "99-104" : "39-41", waist: unit === "cm" ? "81-86" : "32-34", hips: unit === "cm" ? "105-110" : "41.5-43.5" },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-[#FAF8F5] text-[#121212] p-6 sm:p-8 shadow-2xl border border-[#E5DFD5]">
          <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD5]">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#72202B] font-semibold">
                Fit & Measurements
              </span>
              <h3 className="font-serif text-2xl uppercase tracking-wide">
                Size Guide ({category})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#121212]/60 hover:text-[#121212] transition-colors"
              aria-label="Close size guide"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Unit Toggle */}
          <div className="my-5 flex items-center justify-between">
            <p className="text-xs text-[#6B7280]">
              Measurements correspond to body sizing in {unit.toUpperCase()}.
            </p>
            <div className="flex border border-[#E5DFD5] text-xs font-medium">
              <button
                onClick={() => setUnit("cm")}
                className={`px-3 py-1 ${
                  unit === "cm"
                    ? "bg-[#121212] text-[#FAF8F5]"
                    : "bg-[#FAF8F5] text-[#121212]"
                }`}
              >
                CM
              </button>
              <button
                onClick={() => setUnit("in")}
                className={`px-3 py-1 ${
                  unit === "in"
                    ? "bg-[#121212] text-[#FAF8F5]"
                    : "bg-[#FAF8F5] text-[#121212]"
                }`}
              >
                IN
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-[#E5DFD5] text-[#6B7280] uppercase tracking-wider">
                  <th className="py-2.5 font-medium">Size</th>
                  <th className="py-2.5 font-medium">Chest / Bust</th>
                  <th className="py-2.5 font-medium">Waist</th>
                  <th className="py-2.5 font-medium">Hips</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD5]/60">
                {measurements.map((row) => (
                  <tr key={row.size} className="hover:bg-[#F2EDE4]/60">
                    <td className="py-2.5 font-serif font-medium text-[#121212]">{row.size}</td>
                    <td className="py-2.5 text-[#6B7280]">{row.bust}</td>
                    <td className="py-2.5 text-[#6B7280]">{row.waist}</td>
                    <td className="py-2.5 text-[#6B7280]">{row.hips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Measuring advice */}
          <div className="mt-6 pt-4 border-t border-[#E5DFD5] space-y-2 text-[11px] text-[#6B7280]">
            <div className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-[#72202B] shrink-0 mt-0.5" />
              <span>True to luxury European sizing. If in between sizes, we recommend sizing up for a tailored drape.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-[#72202B] shrink-0 mt-0.5" />
              <span>Complimentary exchanges and returns within 30 days of arrival.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
