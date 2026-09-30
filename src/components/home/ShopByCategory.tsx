import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ShopByCategory() {
  const categories = [
    {
      title: "WOMEN",
      subtitle: "Fluid silhouettes & delicate drapes",
      href: "/shop?category=Women",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "MEN",
      subtitle: "Architectural tailoring & structured knits",
      href: "/shop?category=Men",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "ACCESSORIES",
      subtitle: "Artisanal leathercraft & footwear",
      href: "/shop?category=Accessories",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#72202B] font-semibold">
            Curated Universes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#121212] uppercase mt-2">
            Shop By Category
          </h2>
        </div>

        {/* 3 Large Visual Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative h-[480px] sm:h-[540px] w-full overflow-hidden bg-[#121212] block shadow-lg"
            >
              {/* Category Image with Zoom Effect */}
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center filter brightness-[0.8] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:from-black/90 transition-all duration-300" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-[#FAF8F5]">
                <p className="text-[11px] uppercase tracking-widest text-[#FAF8F5]/70 mb-1">
                  {cat.subtitle}
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal tracking-wide uppercase mb-4">
                  {cat.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-[#FAF8F5] group-hover:text-[#FAF8F5] transition-colors">
                  <span className="border-b border-[#FAF8F5] pb-0.5 group-hover:border-[#72202B] group-hover:text-white transition-colors">
                    Explore
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
