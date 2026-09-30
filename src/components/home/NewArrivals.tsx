import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { getNewArrivals } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function NewArrivals() {
  const newArrivals = getNewArrivals();

  return (
    <section id="new-arrivals" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#72202B] font-semibold">
              Latest Drop
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#121212] uppercase mt-2">
              New Arrivals
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6B7280] font-light">
              Fresh silhouettes. New season energy.
            </p>
          </div>

          <Link
            href="/shop?filter=new"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#121212] hover:text-[#72202B] transition-colors group"
          >
            <span>View All New Arrivals</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Premium Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {newArrivals.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
