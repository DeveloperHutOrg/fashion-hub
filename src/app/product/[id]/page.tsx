import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductById } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductDetails from "@/components/product/ProductDetails";
import ProductCard from "@/components/product/ProductCard";
import Newsletter from "@/components/home/Newsletter";
import { ChevronRight, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // Related products from same category or trending
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.trending)
  ).slice(0, 4);

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="py-4 flex items-center space-x-2 text-xs text-[#6B7280] uppercase tracking-wider mb-6">
          <Link href="/" className="hover:text-[#121212] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <Link href="/shop" className="hover:text-[#121212] transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-[#121212] transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[#121212] font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#6B7280] hover:text-[#121212] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to collection</span>
          </Link>
        </div>

        {/* Main Product Layout: Gallery Left, Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Gallery (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* Right Details (5 cols on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ProductDetails product={product} />
          </div>
        </div>

        {/* Related Styles Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-28 pt-16 border-t border-[#E5DFD5]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#72202B] font-semibold">
                  Complete The Wardrobe
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight uppercase text-[#121212] mt-2">
                  You May Also Admire
                </h2>
              </div>
              <Link
                href="/shop"
                className="mt-4 sm:mt-0 text-xs uppercase tracking-[0.2em] font-medium text-[#121212] hover:text-[#72202B] transition-colors"
              >
                View Catalog
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-20">
        <Newsletter />
      </div>
    </div>
  );
}
