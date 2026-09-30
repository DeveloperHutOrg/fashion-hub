export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "Women" | "Men" | "Accessories";
  subcategory: string;
  price: number;
  oldPrice?: number;
  image: string;
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  rating: number;
  reviewCount: number;
  description: string;
  details: string[];
  material: string;
  care: string;
  featured?: boolean;
  newArrival?: boolean;
  sale?: boolean;
  trending?: boolean;
}

export interface CartItem {
  id: string; // composite key e.g. `${product.id}-${color}-${size}`
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export interface FilterState {
  category: string;
  subcategory: string;
  size: string;
  color: string;
  sortBy: "featured" | "newest" | "price-low" | "price-high" | "rating";
  saleOnly: boolean;
  searchQuery: string;
}
