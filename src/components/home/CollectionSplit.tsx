import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CollectionSplit() {
  return (
    <section className="bg-[#F2EDE4] overflow-hidden border-y border-[#E5DFD5]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
        {/* Left: Large Fashion Image */}
        <div className="relative min-h-[420px] lg:min-h-full w-full overflow-hidden bg-[#E5DFD5]">
          <Image
            src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1600&auto=format&fit=crop"
            alt="The New Classic editorial collection"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
          />
        </div>

        {/* Right: Large Editorial Typography & Story */}
        <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 py-16 lg:py-24 bg-[#FAF8F5]">
          <span className="text-xs uppercase tracking-[0.3em] text-[#72202B] font-semibold mb-4">
            Capsule No. 04
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal uppercase tracking-tight text-[#121212] leading-[1.05]">
            The New Classic
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#6B7280] font-light leading-relaxed max-w-lg">
            Timeless pieces redesigned for the modern wardrobe. Engineered with sustainable European fabrics, balanced tailoring, and understated confidence.
          </p>

          <div className="mt-8 pt-6 border-t border-[#E5DFD5] grid grid-cols-2 gap-6 max-w-sm">
            <div>
              <p className="font-serif text-2xl font-medium text-[#121212]">100%</p>
              <p className="text-xs uppercase tracking-wider text-[#6B7280] mt-1">Noble Natural Fibers</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-medium text-[#121212]">Handmade</p>
              <p className="text-xs uppercase tracking-wider text-[#6B7280] mt-1">Artisanal Tailoring</p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-[#121212] text-[#FAF8F5] hover:bg-[#72202B] px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all group shadow-md"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
