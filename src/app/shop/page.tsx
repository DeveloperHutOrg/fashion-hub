"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { FilterState } from "@/types";
import FilterBar from "@/components/shop/FilterBar";
import ProductGrid from "@/components/shop/ProductGrid";
import Newsletter from "@/components/home/Newsletter";

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const filterParam = searchParams.get("filter");
  const queryParam = searchParams.get("q");

  const [filterState, setFilterState] = useState<FilterState>({
    category: categoryParam || "All",
    subcategory: "All",
    size: "All",
    color: "All",
    sortBy: "featured",
    saleOnly: filterParam === "sale",
    searchQuery: queryParam || "",
  });

  // Sync when search params change in URL
  useEffect(() => {
    if (categoryParam) {
      setFilterState((prev) => ({ ...prev, category: categoryParam }));
    }
    if (filterParam === "sale") {
      setFilterState((prev) => ({ ...prev, saleOnly: true }));
    }
    if (filterParam === "new") {
      setFilterState((prev) => ({ ...prev, sortBy: "newest" }));
    }
    if (queryParam) {
      setFilterState((prev) => ({ ...prev, searchQuery: queryParam }));
    }
  }, [categoryParam, filterParam, queryParam]);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (filterState.category !== "All") {
      result = result.filter(
        (p) => p.category.toLowerCase() === filterState.category.toLowerCase()
      );
    }

    // Sale only
    if (filterState.saleOnly) {
      result = result.filter((p) => p.sale);
    }

    // Size filter
    if (filterState.size !== "All") {
      result = result.filter((p) => p.sizes.includes(filterState.size));
    }

    // Color filter
    if (filterState.color !== "All") {
      const colorQuery = filterState.color.toLowerCase();
      result = result.filter((p) =>
        p.colors.some((c) => c.name.toLowerCase().includes(colorQuery))
      );
    }

    // Search query
    if (filterState.searchQuery.trim()) {
      const q = filterState.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q)
      );
    }

    // Sort
    if (filterState.sortBy === "newest") {
      result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
    } else if (filterState.sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (filterState.sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (filterState.sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [filterState]);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero Area */}
        <div className="text-center py-10 sm:py-14 border-b border-[#E5DFD5] mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#72202B] font-semibold">
            {filterState.saleOnly
              ? "Private Archive"
              : filterState.category !== "All"
              ? `${filterState.category} Collection`
              : "Full Catalog"}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal uppercase tracking-tight text-[#121212] mt-2">
            {filterState.saleOnly
              ? "Sale Selection"
              : filterState.category !== "All"
              ? filterState.category
              : "Shop All"}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280] font-light max-w-lg mx-auto">
            Refined sartorial silhouettes crafted with natural noble fibers and enduring modern elegance.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          filterState={filterState}
          setFilterState={setFilterState}
          totalCount={filteredProducts.length}
        />

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          onResetFilters={() =>
            setFilterState({
              category: "All",
              subcategory: "All",
              size: "All",
              color: "All",
              sortBy: "featured",
              saleOnly: false,
              searchQuery: "",
            })
          }
        />
      </div>

      <div className="mt-20">
        <Newsletter />
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-36 text-center">
          <p className="font-serif text-lg uppercase tracking-widest text-[#6B7280]">
            Loading Collection...
          </p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
