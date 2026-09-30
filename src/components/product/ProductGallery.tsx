"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const activeImage = images[selectedIndex] || images[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto no-scrollbar shrink-0">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative w-20 h-28 sm:w-24 sm:h-32 bg-[#F2EDE4] shrink-0 overflow-hidden transition-all ${
              selectedIndex === idx
                ? "border-2 border-[#121212] opacity-100 shadow-sm"
                : "opacity-60 hover:opacity-100 border border-transparent"
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <Image
              src={img}
              alt={`${productName} view ${idx + 1}`}
              fill
              sizes="96px"
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>

      {/* Main High-Res Showcase Image */}
      <div
        className="relative flex-1 aspect-[3/4] bg-[#F2EDE4] overflow-hidden cursor-crosshair group shadow-xs"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={activeImage}
          alt={productName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-top transition-transform duration-200"
          style={
            isZoomed
              ? {
                  transform: "scale(1.5)",
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }
              : { transform: "scale(1)" }
          }
        />

        {/* Counter Badge */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-xs text-[#FAF8F5] px-2.5 py-1 text-[10px] uppercase tracking-widest font-mono">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
