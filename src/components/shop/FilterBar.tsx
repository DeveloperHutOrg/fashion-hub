"use client";

import { FilterState } from "@/types";
import { SlidersHorizontal, X, RotateCcw } from "lucide-react";
import { useState } from "react";

interface FilterBarProps {
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  totalCount: number;
}

export default function FilterBar({
  filterState,
  setFilterState,
  totalCount,
}: FilterBarProps) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = ["All", "Women", "Men", "Accessories"];
  const sizes = ["All", "XS", "S", "M", "L", "XL", "36", "38", "40", "42"];
  const colors = ["All", "Noir", "Ecru", "Camel", "Burgundy", "Charcoal"];

  const handleCategoryChange = (category: string) => {
    setFilterState((prev) => ({ ...prev, category }));
  };

  const handleSizeChange = (size: string) => {
    setFilterState((prev) => ({ ...prev, size }));
  };

  const handleColorChange = (color: string) => {
    setFilterState((prev) => ({ ...prev, color }));
  };

  const handleSortChange = (
    sortBy: FilterState["sortBy"]
  ) => {
    setFilterState((prev) => ({ ...prev, sortBy }));
  };

  const resetFilters = () => {
    setFilterState({
      category: "All",
      subcategory: "All",
      size: "All",
      color: "All",
      sortBy: "featured",
      saleOnly: false,
      searchQuery: "",
    });
  };

  const hasActiveFilters =
    filterState.category !== "All" ||
    filterState.size !== "All" ||
    filterState.color !== "All" ||
    filterState.saleOnly ||
    filterState.searchQuery !== "";

  return (
    <div className="mb-10">
      {/* Category Tabs Top Row */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#E5DFD5] pb-4 gap-4">
        {/* Category Pills */}
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all ${
                filterState.category === cat
                  ? "bg-[#121212] text-[#FAF8F5] shadow-xs"
                  : "bg-transparent text-[#121212]/70 hover:text-[#121212] hover:bg-[#F2EDE4]"
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() =>
              setFilterState((prev) => ({ ...prev, saleOnly: !prev.saleOnly }))
            }
            className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all ${
              filterState.saleOnly
                ? "bg-[#72202B] text-[#FAF8F5]"
                : "text-[#72202B] hover:bg-[#72202B]/10"
            }`}
          >
            Sale Archive
          </button>
        </div>

        {/* Mobile Filter Toggle Button & Sort */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-wider border border-[#E5DFD5] hover:border-[#121212] bg-[#FAF8F5] transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-[#72202B]" />
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#6B7280] hidden md:inline uppercase tracking-wider">
              Sort:
            </span>
            <select
              value={filterState.sortBy}
              onChange={(e) =>
                handleSortChange(e.target.value as FilterState["sortBy"])
              }
              className="bg-[#FAF8F5] border border-[#E5DFD5] px-3 py-2 text-xs uppercase tracking-wider focus:outline-none focus:border-[#121212]"
            >
              <option value="featured">Featured First</option>
              <option value="newest">New Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Expandable Filter Tray */}
      {isMobileFilterOpen && (
        <div className="py-6 px-5 bg-[#F2EDE4] border-b border-[#E5DFD5] mt-2 space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#E5DFD5]">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#121212]">
              Refine Silhouette & Attributes
            </span>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-[#72202B] hover:underline flex items-center gap-1 font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                Reset All
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            {/* Size Filter */}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#6B7280] mb-2 font-medium">
                Size
              </p>
              <div className="flex flex-wrap gap-1.5">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSizeChange(s)}
                    className={`px-2.5 py-1 min-w-[32px] text-center border transition-all ${
                      filterState.size === s
                        ? "bg-[#121212] text-white border-[#121212]"
                        : "bg-white text-[#121212] border-[#E5DFD5] hover:border-black"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#6B7280] mb-2 font-medium">
                Color Palette
              </p>
              <div className="flex flex-wrap gap-1.5">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => handleColorChange(c)}
                    className={`px-3 py-1 border transition-all ${
                      filterState.color === c
                        ? "bg-[#121212] text-white border-[#121212]"
                        : "bg-white text-[#121212] border-[#E5DFD5] hover:border-black"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Query Filter in Tray */}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#6B7280] mb-2 font-medium">
                Filter by Keyword
              </p>
              <input
                type="text"
                placeholder="Blazer, Cashmere, Linen..."
                value={filterState.searchQuery}
                onChange={(e) =>
                  setFilterState((prev) => ({ ...prev, searchQuery: e.target.value }))
                }
                className="w-full bg-white border border-[#E5DFD5] px-3 py-2 text-xs focus:outline-none focus:border-[#121212]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Active Filter Pills Bar & Product Count */}
      <div className="flex flex-wrap items-center justify-between pt-4 text-xs">
        <p className="text-[#6B7280] font-light">
          Showing <span className="font-semibold text-[#121212]">{totalCount}</span> style{totalCount === 1 ? "" : "s"}
        </p>

        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
            {filterState.category !== "All" && (
              <span className="inline-flex items-center gap-1 bg-[#FAF8F5] border border-[#E5DFD5] px-2.5 py-1 text-[11px]">
                {filterState.category}
                <button
                  onClick={() => handleCategoryChange("All")}
                  aria-label="Remove category filter"
                >
                  <X className="w-3 h-3 text-[#6B7280] hover:text-[#121212]" />
                </button>
              </span>
            )}
            {filterState.size !== "All" && (
              <span className="inline-flex items-center gap-1 bg-[#FAF8F5] border border-[#E5DFD5] px-2.5 py-1 text-[11px]">
                Size: {filterState.size}
                <button
                  onClick={() => handleSizeChange("All")}
                  aria-label="Remove size filter"
                >
                  <X className="w-3 h-3 text-[#6B7280] hover:text-[#121212]" />
                </button>
              </span>
            )}
            {filterState.color !== "All" && (
              <span className="inline-flex items-center gap-1 bg-[#FAF8F5] border border-[#E5DFD5] px-2.5 py-1 text-[11px]">
                Color: {filterState.color}
                <button
                  onClick={() => handleColorChange("All")}
                  aria-label="Remove color filter"
                >
                  <X className="w-3 h-3 text-[#6B7280] hover:text-[#121212]" />
                </button>
              </span>
            )}
            {filterState.saleOnly && (
              <span className="inline-flex items-center gap-1 bg-[#72202B]/10 text-[#72202B] border border-[#72202B]/20 px-2.5 py-1 text-[11px] font-medium">
                Sale Only
                <button
                  onClick={() =>
                    setFilterState((prev) => ({ ...prev, saleOnly: false }))
                  }
                  aria-label="Remove sale filter"
                >
                  <X className="w-3 h-3 text-[#72202B]" />
                </button>
              </span>
            )}
            {filterState.searchQuery && (
              <span className="inline-flex items-center gap-1 bg-[#FAF8F5] border border-[#E5DFD5] px-2.5 py-1 text-[11px]">
                &ldquo;{filterState.searchQuery}&rdquo;
                <button
                  onClick={() =>
                    setFilterState((prev) => ({ ...prev, searchQuery: "" }))
                  }
                  aria-label="Clear search keyword"
                >
                  <X className="w-3 h-3 text-[#6B7280] hover:text-[#121212]" />
                </button>
              </span>
            )}
            <button
              onClick={resetFilters}
              className="text-[11px] text-[#72202B] hover:underline uppercase tracking-wider ml-1"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
