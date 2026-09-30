import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "oversized-linen-shirt",
    name: "Oversized Linen Shirt",
    slug: "oversized-linen-shirt",
    category: "Women",
    subcategory: "Shirts",
    price: 185,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Raw Ecru", hex: "#EAE6DF" },
      { name: "Noir", hex: "#171717" },
      { name: "Clay Brown", hex: "#8A6D58" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.9,
    reviewCount: 42,
    description: "Woven from 100% French Normandy flax, this relaxed-cut linen shirt balances laid-back ease with architectural drape. Features mother-of-pearl buttons and dropped shoulder seams for a modern silhouette.",
    details: [
      "Cut for an oversized, fluid silhouette",
      "Mother-of-pearl front closure and button cuffs",
      "Box pleat at back yoke for effortless movement",
      "Garment-washed for a soft, broken-in hand feel"
    ],
    material: "100% French Normandy Linen",
    care: "Machine wash delicate 30°C or dry clean. Hang dry in shade.",
    featured: true,
    newArrival: true,
    trending: true
  },
  {
    id: "essential-tailored-blazer",
    name: "Essential Tailored Blazer",
    slug: "essential-tailored-blazer",
    category: "Women",
    subcategory: "Tailoring",
    price: 395,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Oatmeal Melange", hex: "#D6CEBF" },
      { name: "Pitch Black", hex: "#111111" },
      { name: "Burgundy", hex: "#72202B" }
    ],
    sizes: ["34", "36", "38", "40", "42"],
    rating: 4.95,
    reviewCount: 68,
    description: "A masterclass in modern sartorial tailoring. Structured shoulders meet a relaxed, single-breasted body crafted from Italian virgin wool twill. Finished with cupro lining and horn buttons.",
    details: [
      "Structured shoulders with subtle canvas padding",
      "Notch lapels and horn button closure",
      "Double back vents and dual flap jet pockets",
      "Fully lined in breathable Japanese cupro"
    ],
    material: "98% Italian Virgin Wool, 2% Elastane",
    care: "Specialist dry clean only.",
    featured: true,
    newArrival: true,
    trending: true
  },
  {
    id: "studio-wide-leg-trousers",
    name: "Studio Wide-Leg Trousers",
    slug: "studio-wide-leg-trousers",
    category: "Women",
    subcategory: "Pants",
    price: 245,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Camel", hex: "#A67B5B" },
      { name: "Off-White", hex: "#F5F2EB" },
      { name: "Charcoal", hex: "#2E3033" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.88,
    reviewCount: 39,
    description: "High-waisted trousers with sharp inverted front pleats that fall gracefully into an elongated wide-leg silhouette. Tailored for an effortlessly striking profile whether paired with heels or trainers.",
    details: [
      "High-rise with internal hook-and-bar waist closure",
      "Deep front pleats with pressed center creases",
      "Side slash pockets and welt back pocket",
      "Generous hem allowance for custom tailoring"
    ],
    material: "100% Fine Wool Gabardine",
    care: "Dry clean only.",
    featured: true,
    newArrival: true,
    trending: false
  },
  {
    id: "signature-leather-jacket",
    name: "Signature Leather Jacket",
    slug: "signature-leather-jacket",
    category: "Men",
    subcategory: "Outerwear",
    price: 680,
    oldPrice: 850,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Obsidian Black", hex: "#141414" },
      { name: "Vintage Espresso", hex: "#3D2B1F" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.97,
    reviewCount: 54,
    description: "Constructed from supple vegetable-tanned lambskin leather that develops an exceptional patina over years of wear. Minimalist asymmetric zip and polished silver hardware.",
    details: [
      "Vegetable-tanned full-grain lambskin",
      "Heavy gauge custom matte silver YKK hardware",
      "Action back shoulder gussets for comfortable reach",
      "Quilted satin interior lining with two security pockets"
    ],
    material: "100% Lambskin Leather; Lining: 100% Viscose",
    care: "Specialist leather care only.",
    featured: true,
    newArrival: true,
    sale: true,
    trending: true
  },
  {
    id: "cashmere-crewneck-knit",
    name: "Cashmere Crewneck Knit",
    slug: "cashmere-crewneck-knit",
    category: "Women",
    subcategory: "Knitwear",
    price: 320,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Bisque Cream", hex: "#ECE4D8" },
      { name: "Deep Burgundy", hex: "#72202B" },
      { name: "Heather Slate", hex: "#7A8288" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.92,
    reviewCount: 31,
    description: "Spun from 2-ply Mongolian grade-A cashmere fibers, this timeless crewneck offers cloud-like softness, natural temperature regulation, and pill-resistant longevity.",
    details: [
      "Medium 12-gauge knit ideal for four-season layering",
      "Ribbed collar, cuffs, and hem with elastane recovery",
      "Slightly relaxed torso with neat shoulder lines",
      "OEKO-TEX certified sustainable spinning process"
    ],
    material: "100% Grade-A Mongolian Cashmere",
    care: "Hand wash cold with wool detergent or dry clean.",
    featured: false,
    newArrival: false,
    trending: true
  },
  {
    id: "silk-bias-cut-slip-dress",
    name: "Silk Bias-Cut Slip Dress",
    slug: "silk-bias-cut-slip-dress",
    category: "Women",
    subcategory: "Dresses",
    price: 290,
    oldPrice: 360,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Champagne Luster", hex: "#E8DEC8" },
      { name: "Midnight Black", hex: "#0D0E12" },
      { name: "Wine Rose", hex: "#7C3B43" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.96,
    reviewCount: 47,
    description: "Cut on the bias from heavyweight 22-momme mulberry silk satin to drape naturally along the body's contours. Features delicate adjustable rouleau straps and French seams.",
    details: [
      "True bias cut for liquid-like movement and drape",
      "V-neckline with self-faced clean edge finishing",
      "Adjustable discreet spaghetti straps",
      "Ankle-grazing midi hem with side slit"
    ],
    material: "100% Mulberry Silk Satin (22 Momme)",
    care: "Dry clean or gentle hand wash cold with silk wash.",
    featured: false,
    newArrival: false,
    sale: true,
    trending: true
  },
  {
    id: "sculptural-leather-tote",
    name: "Sculptural Leather Tote",
    slug: "sculptural-leather-tote",
    category: "Accessories",
    subcategory: "Bags",
    price: 450,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Saddle Tan", hex: "#8F5E38" },
      { name: "Matte Black", hex: "#1A1A1A" },
      { name: "Alabaster", hex: "#F0ECE1" }
    ],
    sizes: ["One Size"],
    rating: 4.94,
    reviewCount: 38,
    description: "Handcrafted in Florence from vegetable-tanned Tuscan calfskin. Architectural folded side gussets allow the silhouette to morph from structured tote to relaxed shopper.",
    details: [
      "Comfortably accommodates a 15-inch laptop and daily essentials",
      "Internal detachable zippered pouch in matching calfskin",
      "Magnetic top clasp closure and reinforced tubular handles",
      "Hand-painted raw edges and gold foil serial stamp"
    ],
    material: "100% Full Grain Italian Calfskin",
    care: "Condition periodically with natural leather balm.",
    featured: true,
    newArrival: false,
    trending: true
  },
  {
    id: "minimalist-trench-coat",
    name: "Minimalist Trench Coat",
    slug: "minimalist-trench-coat",
    category: "Women",
    subcategory: "Outerwear",
    price: 520,
    oldPrice: 650,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Classic Honey", hex: "#C7A779" },
      { name: "Blackened Olive", hex: "#3B4036" },
      { name: "Ivory Chalk", hex: "#EDE8DD" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.91,
    reviewCount: 52,
    description: "A stripped-back, contemporary interpretation of the military trench. Cut long from water-repellent organic cotton gabardine with an unlined construction for lightweight fluidity.",
    details: [
      "Double-breasted storm flap front with horn buttons",
      "Wide raglan sleeves with adjustable buckle cuffs",
      "Detachable self-tie waist belt with D-ring accents",
      "Deep back storm shield with inverted vent"
    ],
    material: "100% Organic Compact Cotton Gabardine",
    care: "Dry clean only.",
    featured: false,
    newArrival: false,
    sale: true,
    trending: true
  },
  {
    id: "chunky-sole-chelsea-boot",
    name: "Chunky-Sole Chelsea Boot",
    slug: "chunky-sole-chelsea-boot",
    category: "Accessories",
    subcategory: "Footwear",
    price: 360,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Polished Nero", hex: "#161616" },
      { name: "Oxblood Cordovan", hex: "#4A1B22" }
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    rating: 4.87,
    reviewCount: 29,
    description: "Modern proportions meet heritage construction. Features oiled box calf leather, twin tonal elastic gussets, and an ultra-lightweight blown Vibram lug sole for confident all-weather traction.",
    details: [
      "Water-resistant oiled box calf leather upper",
      "Goodyear welted for lifelong resoleability",
      "Custom Italian Vibram lightweight tread sole",
      "Ergonomic calfskin-lined cushioned footbed"
    ],
    material: "Calfskin Leather; Sole: 100% Vibram Rubber",
    care: "Wipe with damp cloth and apply neutral wax polish.",
    featured: false,
    newArrival: false,
    trending: true
  },
  {
    id: "pleated-poplin-shirt-dress",
    name: "Pleated Poplin Shirt Dress",
    slug: "pleated-poplin-shirt-dress",
    category: "Women",
    subcategory: "Dresses",
    price: 260,
    oldPrice: 320,
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Crisp Chalk", hex: "#F7F5F0" },
      { name: "Sky Chambray", hex: "#9FB3C8" },
      { name: "Midnight Navy", hex: "#1D2430" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.85,
    reviewCount: 23,
    description: "Crisp Italian cotton poplin shaped with sculptural waist knife pleats that release into an airy skirt. Features a concealed placket and French cuff details.",
    details: [
      "Structured point collar with concealed button front",
      "Sharp permanent knife pleats at natural waistline",
      "Generous side in-seam pockets",
      "Removable sash belt for customized waist cinching"
    ],
    material: "100% GOTS Certified Organic Cotton Poplin",
    care: "Machine wash delicate 30°C. Warm iron.",
    featured: false,
    newArrival: false,
    sale: true,
    trending: false
  },
  {
    id: "tailored-wool-trousers-men",
    name: "Tailored Wool Pleated Trousers",
    slug: "tailored-wool-trousers-men",
    category: "Men",
    subcategory: "Pants",
    price: 275,
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Melange Grey", hex: "#5C6068" },
      { name: "Deep Charcoal", hex: "#222428" },
      { name: "Navy Twill", hex: "#1C2433" }
    ],
    sizes: ["30", "32", "34", "36", "38"],
    rating: 4.93,
    reviewCount: 36,
    description: "Cut from high-twist 4-ply English wool hopsack that resists wrinkles while holding a clean, sharp crease. Single forward pleat with side tab adjusters for a beltless clean waist.",
    details: [
      "Side waistband buckle adjusters with extended tab closure",
      "Single crisp forward pleat and pressed center crease",
      "Curtain waistband construction for bespoke drape",
      "Turn-up 1.75 inch cuffs"
    ],
    material: "100% English High-Twist Wool",
    care: "Dry clean only.",
    featured: true,
    newArrival: true,
    trending: false
  },
  {
    id: "italian-wool-overcoat",
    name: "Italian Wool Overcoat",
    slug: "italian-wool-overcoat",
    category: "Men",
    subcategory: "Outerwear",
    price: 740,
    oldPrice: 890,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Camel Melton", hex: "#9E7B54" },
      { name: "Raven Black", hex: "#141416" }
    ],
    sizes: ["38", "40", "42", "44"],
    rating: 4.98,
    reviewCount: 61,
    description: "An investment piece constructed from 650gsm double-faced melton wool milled in Biella, Italy. Clean single-breasted front with hidden horn buttons and unconstructed soft shoulder.",
    details: [
      "Substantial 650gsm Italian virgin melton wool",
      "Fly front concealment placket with real horn buttons",
      "High center back vent for walking ease",
      "Interior breast pockets finished with leather piping"
    ],
    material: "90% Italian Virgin Wool, 10% Cashmere",
    care: "Specialist dry clean only.",
    featured: false,
    newArrival: false,
    sale: true,
    trending: true
  }
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id || p.slug === id);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getNewArrivals(): Product[] {
  return PRODUCTS.filter((p) => p.newArrival).slice(0, 4);
}

export function getTrendingProducts(): Product[] {
  return PRODUCTS.filter((p) => p.trending);
}

export function getSaleProducts(): Product[] {
  return PRODUCTS.filter((p) => p.sale);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}
