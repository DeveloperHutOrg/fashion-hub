import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import CollectionSplit from "@/components/home/CollectionSplit";
import ShopByCategory from "@/components/home/ShopByCategory";
import EditorialSection from "@/components/home/EditorialSection";
import TrendingNow from "@/components/home/TrendingNow";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Editorial Hero Section */}
      <Hero />

      {/* New Arrivals with 4 premium cards */}
      <NewArrivals />

      {/* The New Classic split-screen section */}
      <CollectionSplit />

      {/* Shop By Category: 3 large visual tiles */}
      <ShopByCategory />

      {/* Magazine Editorial Section: Fashion, Your Way */}
      <EditorialSection />

      {/* Trending Now Horizontal Carousel */}
      <TrendingNow />

      {/* Promotional Banner: Up to 40% Off */}
      <PromotionalBanner />

      {/* Luxury Minimal Newsletter */}
      <Newsletter />
    </div>
  );
}
