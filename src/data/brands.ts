// Centralized Brand Database - Live Shopify Brands Only
// Dynamic product fetching from real Shopify stores

export interface ProductImage {
  url: string;
  alt: string;
  aspectRatio?: string;
}

export interface BrandProduct {
  id: string;
  title: string;
  model: string;
  price: string;
  originalPrice?: string;
  images: ProductImage[];
  tag?: string;
  stock?: string;
  externalUrl?: string;
  slug: string;
  category: string;
}

export interface CategoryAssignment {
  category: "fashion" | "watches" | "fitness" | "beauty";
  featured: boolean;
  priority: number;
  active: boolean;
}

export interface TrendingConfig {
  promoted: boolean;
  promotionType: "paid" | "featured" | "new" | "sale" | "exclusive";
  priority: number;
  campaignEndDate?: string;
  active: boolean;
}

export interface BrandData {
  id: string;
  name: string;
  tagline: string;
  story: string;
  heroImage: string;
  logo?: string;
  founded?: string;
  location?: string;
  website: string;
  shopifyDomain: string;
  priceRange: "budget" | "mid" | "luxury" | "ultra-luxury";
  categories: CategoryAssignment[];
  trending: TrendingConfig;
  active: boolean;
  isLive: boolean;
  products: BrandProduct[]; // Empty for live brands - products fetched dynamically
  metadata: {
    createdAt: string;
    updatedAt: string;
    totalProducts: number;
    averagePrice: number;
  };
}

// LIVE SHOPIFY BRANDS DATABASE - Real-time product data
export const BRANDS_DATABASE: Record<string, BrandData> = {
  bebe: {
    id: "bebe",
    name: "bebe",
    tagline: "Chic & Contemporary Clothing",
    story:
      "bebe offers contemporary fashion for confident women. From statement dresses to everyday essentials, we create pieces that celebrate femininity and style.",
    heroImage: "https://ext.same-assets.com/2255372474/3029823999.jpeg",
    website: "https://www.bebe.com",
    shopifyDomain: "www.bebe.com",
    founded: "1976",
    location: "San Francisco, CA",
    priceRange: "mid",
    categories: [
      { category: "fashion", featured: true, priority: 1, active: true },
    ],
    trending: {
      promoted: true,
      promotionType: "featured",
      priority: 1,
      active: true,
    },
    active: true,
    isLive: true,
    products: [], // Live products fetched from Shopify
    metadata: {
      createdAt: "2025-01-05T10:00:00Z",
      updatedAt: "2025-01-05T10:00:00Z",
      totalProducts: 0, // Dynamic count
      averagePrice: 0, // Dynamic calculation
    },
  },

  "daniel-wellington": {
    id: "daniel-wellington",
    name: "Daniel Wellington",
    tagline: "Timeless Luxury Watches",
    story:
      "Daniel Wellington creates classic and timeless watches with a Scandinavian design aesthetic. Our watches combine minimalist style with premium materials.",
    heroImage: "https://ext.same-assets.com/414496998/1760714005.jpeg",
    website: "https://www.danielwellington.com",
    shopifyDomain: "www.danielwellington.com",
    founded: "2011",
    location: "Stockholm, Sweden",
    priceRange: "mid",
    categories: [
      { category: "watches", featured: true, priority: 1, active: true },
    ],
    trending: {
      promoted: true,
      promotionType: "paid",
      priority: 2,
      active: true,
    },
    active: true,
    isLive: true,
    products: [], // Live products fetched from Shopify
    metadata: {
      createdAt: "2025-01-05T10:00:00Z",
      updatedAt: "2025-01-05T10:00:00Z",
      totalProducts: 0, // Dynamic count
      averagePrice: 0, // Dynamic calculation
    },
  },

  triwa: {
    id: "triwa",
    name: "TRIWA",
    tagline: "Time for Oceans - Sustainable Watches",
    story:
      "TRIWA creates sustainable watches that boldly champion awareness and change, driven by our unwavering commitment to bring positive impact to our world. Our Time for Oceans collection features watches made from recycled ocean plastic.",
    heroImage: "https://ext.same-assets.com/3339224669/2696985554.jpeg",
    website: "https://triwa.com",
    shopifyDomain: "triwa.com",
    founded: "2007",
    location: "Stockholm, Sweden",
    priceRange: "mid",
    categories: [
      { category: "watches", featured: true, priority: 2, active: true },
    ],
    trending: {
      promoted: true,
      promotionType: "exclusive",
      priority: 3,
      campaignEndDate: "2025-02-01",
      active: true,
    },
    active: true,
    isLive: true,
    products: [], // Live products fetched from Shopify
    metadata: {
      createdAt: "2025-01-05T10:00:00Z",
      updatedAt: "2025-01-05T10:00:00Z",
      totalProducts: 0, // Dynamic count
      averagePrice: 0, // Dynamic calculation
    },
  },

  undone: {
    id: "undone",
    name: "UNDONE",
    tagline: "Custom Watches - Your Story, Your Moment",
    story:
      "UNDONE is the world's leading custom watch brand. We believe individuality matters - design your own custom-made watch online today and let your personality shine through with limitless customization possibilities.",
    heroImage: "https://ext.same-assets.com/3157802305/2103087309.png",
    website: "https://undone.com",
    shopifyDomain: "undone.com",
    founded: "2014",
    location: "Hong Kong",
    priceRange: "mid",
    categories: [
      { category: "watches", featured: true, priority: 3, active: true },
    ],
    trending: {
      promoted: false,
      promotionType: "new",
      priority: 4,
      active: true,
    },
    active: true,
    isLive: true,
    products: [], // Live products fetched from Shopify
    metadata: {
      createdAt: "2025-01-05T10:00:00Z",
      updatedAt: "2025-01-05T10:00:00Z",
      totalProducts: 0, // Dynamic count
      averagePrice: 0, // Dynamic calculation
    },
  },

  "steve-madden": {
    id: "steve-madden",
    name: "Steve Madden",
    tagline: "Fashion Footwear & Accessories",
    story:
      "Steve Madden is a leading fashion footwear and accessories brand, offering stylish shoes and bags that blend fashion-forward design with accessible pricing for trend-conscious consumers.",
    heroImage:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1200&h=400&fit=crop&q=80",
    website: "https://www.stevemadden.com",
    shopifyDomain: "www.stevemadden.com",
    founded: "1990",
    location: "New York, NY",
    priceRange: "mid",
    categories: [
      { category: "fashion", featured: true, priority: 2, active: true },
    ],
    trending: {
      promoted: true,
      promotionType: "featured",
      priority: 5,
      active: true,
    },
    active: true,
    isLive: true,
    products: [], // Live products fetched from Shopify
    metadata: {
      createdAt: "2025-01-05T10:00:00Z",
      updatedAt: "2025-01-05T10:00:00Z",
      totalProducts: 0, // Dynamic count
      averagePrice: 0, // Dynamic calculation
    },
  },

  "oh-polly": {
    id: "oh-polly",
    name: "Oh Polly",
    tagline: "Luxe Party Dresses & Going Out Outfits",
    story:
      "Oh Polly creates luxurious party dresses and going out outfits for confident women. Our designs celebrate femininity with bold cuts, premium fabrics, and attention-grabbing details.",
    heroImage:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&h=400&fit=crop&q=80",
    website: "https://www.ohpolly.com",
    shopifyDomain: "www.ohpolly.com",
    founded: "2015",
    location: "Manchester, UK",
    priceRange: "mid",
    categories: [
      { category: "fashion", featured: true, priority: 3, active: true },
    ],
    trending: {
      promoted: true,
      promotionType: "featured",
      priority: 6,
      active: true,
    },
    active: true,
    isLive: true,
    products: [], // Live products fetched from Shopify
    metadata: {
      createdAt: "2025-01-05T10:00:00Z",
      updatedAt: "2025-01-05T10:00:00Z",
      totalProducts: 0, // Dynamic count
      averagePrice: 0, // Dynamic calculation
    },
  },

  "new-era-cap": {
    id: "new-era-cap",
    name: "New Era",
    tagline: "Official Headwear & Lifestyle Brand",
    story:
      "New Era is the official headwear brand of Major League Baseball and a leading lifestyle brand worldwide. We create premium caps, apparel, and accessories that celebrate sports culture and street style.",
    heroImage:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=1200&h=400&fit=crop&q=80",
    website: "https://www.neweracap.com",
    shopifyDomain: "www.neweracap.com",
    founded: "1920",
    location: "Buffalo, NY",
    priceRange: "mid",
    categories: [
      { category: "fashion", featured: true, priority: 4, active: true },
    ],
    trending: {
      promoted: false,
      promotionType: "new",
      priority: 7,
      active: true,
    },
    active: true,
    isLive: true,
    products: [], // Live products fetched from Shopify
    metadata: {
      createdAt: "2025-01-05T10:00:00Z",
      updatedAt: "2025-01-05T10:00:00Z",
      totalProducts: 0, // Dynamic count
      averagePrice: 0, // Dynamic calculation
    },
  },

  "frankies-bikinis": {
    id: "frankies-bikinis",
    name: "Frankie's Bikinis",
    tagline: "Dreamy Swimwear & Beach Lifestyle",
    story:
      "Frankie's Bikinis creates dreamy swimwear and beach lifestyle pieces inspired by vintage aesthetics and California culture. Our collections celebrate femininity, adventure, and the endless summer spirit.",
    heroImage:
      "https://images.unsplash.com/photo-1544966503-7cc531c3a4c5?w=1200&h=400&fit=crop&q=80",
    website: "https://frankiesbikinis.com",
    shopifyDomain: "frankiesbikinis.com",
    founded: "2012",
    location: "Malibu, CA",
    priceRange: "mid",
    categories: [
      { category: "fashion", featured: true, priority: 5, active: true },
    ],
    trending: {
      promoted: true,
      promotionType: "sale",
      priority: 8,
      active: true,
    },
    active: true,
    isLive: true,
    products: [], // Live products fetched from Shopify
    metadata: {
      createdAt: "2025-01-05T10:00:00Z",
      updatedAt: "2025-01-05T10:00:00Z",
      totalProducts: 0, // Dynamic count
      averagePrice: 0, // Dynamic calculation
    },
  },

  "unique-vintage": {
    id: "unique-vintage",
    name: "Unique Vintage",
    tagline: "Vintage-Inspired Fashion for Modern Women",
    story:
      "Unique Vintage brings you vintage-inspired fashion that celebrates the glamour and elegance of past decades. Our collections feature retro dresses, accessories, and shoes with modern fits and quality.",
    heroImage:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=400&fit=crop&q=80",
    website: "https://www.unique-vintage.com",
    shopifyDomain: "unique-vintage.com",
    founded: "2000",
    location: "Burbank, CA",
    priceRange: "mid",
    categories: [
      { category: "fashion", featured: true, priority: 6, active: true },
    ],
    trending: {
      promoted: false,
      promotionType: "new",
      priority: 9,
      active: true,
    },
    active: true,
    isLive: true,
    products: [], // Live products fetched from Shopify
    metadata: {
      createdAt: "2025-01-05T10:00:00Z",
      updatedAt: "2025-01-05T10:00:00Z",
      totalProducts: 0, // Dynamic count
      averagePrice: 0, // Dynamic calculation
    },
  },
};

// Live Shopify brand identifiers
export const LIVE_SHOPIFY_BRANDS = [
  "bebe",
  "daniel-wellington",
  "triwa",
  "undone",
  "steve-madden",
  "oh-polly",
  "new-era-cap",
  "frankies-bikinis",
  "unique-vintage",
];

// Domain mapping for dynamic fetching
export const SHOPIFY_DOMAIN_MAP: Record<string, string> = {
  bebe: "www.bebe.com",
  "daniel-wellington": "www.danielwellington.com",
  triwa: "triwa.com",
  undone: "undone.com",
  "steve-madden": "www.stevemadden.com",
  "oh-polly": "www.ohpolly.com",
  "new-era-cap": "www.neweracap.com",
  "frankies-bikinis": "frankiesbikinis.com",
  "unique-vintage": "unique-vintage.com",
};

// HELPER FUNCTIONS FOR DATA ACCESS
export const getBrandById = (id: string): BrandData | undefined => {
  return BRANDS_DATABASE[id];
};

export const getAllBrands = (): BrandData[] => {
  return Object.values(BRANDS_DATABASE);
};

export const getActiveBrands = (): BrandData[] => {
  return getAllBrands().filter((brand) => brand.active);
};

export const getLiveBrands = (): BrandData[] => {
  return getActiveBrands().filter((brand) => brand.isLive);
};

export const getBrandsByCategory = (
  category: CategoryAssignment["category"],
): BrandData[] => {
  return getActiveBrands().filter((brand) =>
    brand.categories.some((cat) => cat.category === category && cat.active),
  );
};

export const getTrendingBrands = (): BrandData[] => {
  return getActiveBrands()
    .filter((brand) => brand.trending.promoted && brand.trending.active)
    .sort((a, b) => a.trending.priority - b.trending.priority);
};

export const getFeaturedBrandsForCategory = (
  category: CategoryAssignment["category"],
): BrandData[] => {
  return getBrandsByCategory(category)
    .filter((brand) =>
      brand.categories.some((cat) => cat.category === category && cat.featured),
    )
    .sort((a, b) => {
      const aCategory = a.categories.find((cat) => cat.category === category);
      const bCategory = b.categories.find((cat) => cat.category === category);
      return (aCategory?.priority || 999) - (bCategory?.priority || 999);
    });
};

export const searchBrands = (query: string): BrandData[] => {
  const searchTerm = query.toLowerCase();
  return getActiveBrands().filter(
    (brand) =>
      brand.name.toLowerCase().includes(searchTerm) ||
      brand.tagline.toLowerCase().includes(searchTerm) ||
      brand.story.toLowerCase().includes(searchTerm),
  );
};

export const getBrandsByPriceRange = (
  priceRange: BrandData["priceRange"],
): BrandData[] => {
  return getActiveBrands().filter((brand) => brand.priceRange === priceRange);
};

export const getRecentlyUpdatedBrands = (limit = 5): BrandData[] => {
  return getActiveBrands()
    .sort(
      (a, b) =>
        new Date(b.metadata.updatedAt).getTime() -
        new Date(a.metadata.updatedAt).getTime(),
    )
    .slice(0, limit);
};

// Check if brand uses dynamic Shopify fetching
export const isLiveBrand = (brandId: string): boolean => {
  return LIVE_SHOPIFY_BRANDS.includes(brandId);
};

// Get Shopify domain for brand
export const getShopifyDomain = (brandId: string): string | undefined => {
  return SHOPIFY_DOMAIN_MAP[brandId];
};

// CATEGORY CONFIGURATION
export const CATEGORY_CONFIG = {
  fashion: {
    name: "Fashion",
    description: "Contemporary fashion for confident individuals",
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop&q=80",
  },
  watches: {
    name: "Watches",
    description: "Timepieces that tell your story",
    heroImage:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&h=400&fit=crop&q=80",
  },
  fitness: {
    name: "Fitness",
    description: "Premium activewear for every movement",
    heroImage:
      "https://images.unsplash.com/photo-1506629905607-d9f2e5e78824?w=1200&h=400&fit=crop&q=80",
  },
  beauty: {
    name: "Beauty",
    description: "Beauty essentials for your daily routine",
    heroImage:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=400&fit=crop&q=80",
  },
} as const;

// TRENDING CONFIGURATION
export const TRENDING_CONFIG = {
  maxTrendingBrands: 12,
  defaultCampaignDuration: 30, // days
  promotionTypes: {
    paid: { name: "Paid Promotion", color: "#FFD700" },
    featured: { name: "Featured", color: "#FF6B6B" },
    new: { name: "New", color: "#4ECDC4" },
    sale: { name: "Sale", color: "#FF8B5A" },
    exclusive: { name: "Exclusive", color: "#845EC2" },
  },
} as const;

export default BRANDS_DATABASE;
