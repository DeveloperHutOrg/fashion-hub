import { Product } from "@/types";
import ProductCard from "@/components/product/ProductCard";
import { Sparkles } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  onResetFilters?: () => void;
}

export default function ProductGrid({
  products,
  onResetFilters,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center bg-[#F2EDE4]/60 border border-[#E5DFD5] p-8 max-w-xl mx-auto my-12">
        <Sparkles className="w-8 h-8 mx-auto text-[#72202B] mb-3" />
        <h3 className="font-serif text-2xl uppercase tracking-wide text-[#121212]">
          No Matching Silhouettes
        </h3>
        <p className="mt-2 text-sm text-[#6B7280] font-light max-w-md mx-auto">
          We couldn&apos;t find pieces matching all of your filter parameters. Try loosening your criteria or resetting filters.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="mt-6 bg-[#121212] text-[#FAF8F5] hover:bg-[#72202B] px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
          >
            Reset All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
      {products.map((product, idx) => (
        <ProductCard key={product.id} product={product} priority={idx < 4} />
      ))}
    </div>
  );
}
