import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PromotionalBanner() {
  return (
    <section className="relative w-full py-28 sm:py-36 overflow-hidden bg-[#121212] flex items-center justify-center">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop"
          alt="Seasonal promotional campaign"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.45] contrast-[1.1] hover:scale-102 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-[#FAF8F5]">
        <span className="inline-block text-xs uppercase tracking-[0.35em] text-[#E5DFD5] mb-4 font-medium px-3 py-1 border border-white/20">
          Seasonal Archive Private Sale
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal uppercase tracking-tight leading-[1.05] drop-shadow-lg">
          Up To 40% Off Selected Styles
        </h2>

        <p className="mt-6 text-sm sm:text-base text-[#FAF8F5]/80 max-w-lg mx-auto font-light leading-relaxed">
          Exceptional outerwear, fluid silk separates, and hand-finished footwear from prior seasonal capsules. Limited availability.
        </p>

        <div className="mt-8 sm:mt-10">
          <Link
            href="/shop?filter=sale"
            className="inline-flex items-center gap-3 bg-[#FAF8F5] text-[#121212] hover:bg-[#72202B] hover:text-[#FAF8F5] px-9 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-2xl group"
          >
            <span>Shop Sale</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
