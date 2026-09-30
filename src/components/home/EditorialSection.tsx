import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EditorialSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F2EDE4] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Magazine Masthead Style Header */}
        <div className="border-b border-[#121212]/20 pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#72202B] font-semibold">
              Issue Vol. 08 — The Monograph
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight uppercase text-[#121212] mt-3">
              Fashion, Your Way.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-serif italic text-sm sm:text-base text-[#6B7280]">
            An editorial perspective on personal identity & enduring cut.
          </p>
        </div>

        {/* Asymmetrical Magazine Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Large Editorial Portrait (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E5DFD5] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop"
                alt="Editorial silhouette showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top filter contrast-[1.04] hover:scale-103 transition-transform duration-1000"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-[#FAF8F5] px-3 py-1.5 text-[10px] uppercase tracking-widest">
                Fig. 01 — Architectural Pleating & Negative Space
              </div>
            </div>

            {/* Editorial Quote Block */}
            <div className="p-6 sm:p-8 bg-[#FAF8F5] border-l-2 border-[#72202B]">
              <blockquote className="font-serif text-xl sm:text-2xl text-[#121212] font-normal leading-relaxed italic">
                &ldquo;Style isn&apos;t about following every trend. It&apos;s about knowing what belongs to you.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#6B7280]">
                  Hélène Rostand, Creative Direction
                </span>
                <span className="text-[11px] text-[#72202B] font-mono">PARIS / MILAN</span>
              </div>
            </div>
          </div>

          {/* Secondary Editorial Images & Essays (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-8 lg:pt-12">
            {/* Small Texture / Detail Shot */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E5DFD5] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop"
                alt="Fabric texture and garment draping"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[#FAF8F5] px-2.5 py-1 text-[9px] uppercase tracking-widest">
                Fig. 02 — Wool Twill Drape
              </div>
            </div>

            {/* Essay Paragraph */}
            <div className="space-y-4 px-2">
              <h3 className="font-serif text-2xl uppercase tracking-wide text-[#121212]">
                The Anatomy of Restraint
              </h3>
              <p className="text-sm text-[#6B7280] font-light leading-relaxed">
                In an era dominated by hyper-accelerated cycles, true luxury is deliberate patience. We engineer pieces that shed unnecessary ornament in pursuit of purest form, tactile comfort, and timeless resonance.
              </p>
              <div className="pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-[#72202B] hover:text-[#121212] transition-colors group"
                >
                  <span>Read The Monograph Journal</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
