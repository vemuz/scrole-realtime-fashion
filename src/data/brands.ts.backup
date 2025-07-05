// Centralized Brand Database - Single Source of Truth
// This replaces scattered data across different pages and connects to admin CMS

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
  category: 'fashion' | 'watches' | 'fitness' | 'beauty';
  featured: boolean;
  priority: number;
  active: boolean;
}

export interface TrendingConfig {
  promoted: boolean;
  promotionType: 'paid' | 'featured' | 'new' | 'sale' | 'exclusive';
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
  website?: string;
  priceRange: 'budget' | 'mid' | 'luxury' | 'ultra-luxury';
  categories: CategoryAssignment[];
  trending: TrendingConfig;
  active: boolean;
  products: BrandProduct[];
  metadata: {
    createdAt: string;
    updatedAt: string;
    totalProducts: number;
    averagePrice: number;
  };
}

// Helper function to generate SEO-friendly slugs
function generateSlug(title: string, model: string): string {
  const combined = `${title} ${model}`;
  return combined
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s\-]/g, '')
    .trim()
    .replace(/\s+/g, '_')
    .replace(/-+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');
}

// CENTRALIZED BRAND DATABASE
export const BRANDS_DATABASE: Record<string, BrandData> = {
  'bebe': {
    id: 'bebe',
    name: 'bebe',
    tagline: 'Chic & Contemporary Clothing',
    story: 'bebe offers contemporary fashion for confident women. From statement dresses to everyday essentials, we create pieces that celebrate femininity and style.',
    heroImage: 'https://ext.same-assets.com/2255372474/3029823999.jpeg',
    website: 'https://www.bebe.com',
    founded: '1976',
    location: 'San Francisco, CA',
    priceRange: 'mid',
    categories: [
      { category: 'fashion', featured: true, priority: 1, active: true }
    ],
    trending: {
      promoted: true,
      promotionType: 'featured',
      priority: 1,
      active: true
    },
    active: true,
    products: [
      {
        id: 'bebe-1',
        title: 'Ombre Chiffon Cowl Dress',
        model: 'Brown White',
        price: '$118',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/1693421825.jpeg', alt: 'Ombre Chiffon Cowl Dress in Brown White' }
        ],
        tag: 'NEW',
        externalUrl: 'https://www.bebe.com/collections/new-dresses/products/ombre-chiffon-cowl-dress-brown-white',
        slug: generateSlug('Ombre Chiffon Cowl Dress', 'Brown White'),
        category: 'fashion'
      },
      {
        id: 'bebe-2',
        title: 'Ombre Chiffon Cowl Dress',
        model: 'Purple Pink',
        price: '$118',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/1410155671.jpeg', alt: 'Ombre Chiffon Cowl Dress in Purple Pink' }
        ],
        tag: 'NEW',
        externalUrl: 'https://www.bebe.com/collections/new-dresses/products/ombre-chiffon-cowl-dress-purple-pink',
        slug: generateSlug('Ombre Chiffon Cowl Dress', 'Purple Pink'),
        category: 'fashion'
      },
      {
        id: 'bebe-3',
        title: '3D Floral Strapless Gown',
        model: 'Black',
        price: '$198',
        images: [
          { url: 'https://www.bebe.com/cdn/shop/files/bebe1364_black_1_b6b17418-2867-4f15-8fa9-be0986994c8c_750x.jpg?v=1748558657', alt: '3D Floral Strapless Gown in Black' }
        ],
        tag: 'FORMAL',
        externalUrl: 'https://www.bebe.com/collections/new-dresses/products/3d-floral-strapless-gown-black',
        slug: generateSlug('3D Floral Strapless Gown', 'Black'),
        category: 'fashion'
      }
    ],
    metadata: {
      createdAt: '2025-01-04T10:00:00Z',
      updatedAt: '2025-01-04T15:30:00Z',
      totalProducts: 3,
      averagePrice: 144.67
    }
  },

  'everlane': {
    id: 'everlane',
    name: 'Everlane',
    tagline: 'Radical Transparency. Sustainable Fashion.',
    story: 'Everlane is a modern clothing company that reveals the true cost of our clothing. We source the finest materials and work with the most ethical factories to create timeless pieces at honest prices.',
    heroImage: 'https://ext.same-assets.com/1014321061/645627194.jpeg',
    website: 'https://www.everlane.com',
    founded: '2010',
    location: 'San Francisco, CA',
    priceRange: 'mid',
    categories: [
      { category: 'fashion', featured: true, priority: 2, active: true }
    ],
    trending: {
      promoted: true,
      promotionType: 'featured',
      priority: 2,
      active: true
    },
    active: true,
    products: [
      {
        id: 'everlane-1',
        title: 'The Lace Trim Caftan Dress',
        model: 'White',
        price: '$98',
        images: [
          { url: 'https://ext.same-assets.com/1014321061/3842799923.jpeg', alt: 'The Lace Trim Caftan Dress in White' }
        ],
        tag: 'BESTSELLER',
        slug: generateSlug('The Lace Trim Caftan Dress', 'White'),
        category: 'fashion'
      },
      {
        id: 'everlane-2',
        title: 'The Gauze Smock Dress',
        model: 'Navy',
        price: '$88',
        originalPrice: '$98',
        images: [
          { url: 'https://ext.same-assets.com/1014321061/2919539626.jpeg', alt: 'The Gauze Smock Dress in Navy' }
        ],
        tag: 'SALE',
        slug: generateSlug('The Gauze Smock Dress', 'Navy'),
        category: 'fashion'
      }
    ],
    metadata: {
      createdAt: '2025-01-04T10:00:00Z',
      updatedAt: '2025-01-04T15:30:00Z',
      totalProducts: 2,
      averagePrice: 93
    }
  },

  'daniel-wellington': {
    id: 'daniel-wellington',
    name: 'Daniel Wellington',
    tagline: 'Timeless Luxury Watches',
    story: 'Daniel Wellington creates classic and timeless watches with a Scandinavian design aesthetic. Our watches combine minimalist style with premium materials.',
    heroImage: 'https://ext.same-assets.com/414496998/1760714005.jpeg',
    website: 'https://www.danielwellington.com',
    founded: '2011',
    location: 'Stockholm, Sweden',
    priceRange: 'mid',
    categories: [
      { category: 'watches', featured: true, priority: 1, active: true }
    ],
    trending: {
      promoted: true,
      promotionType: 'paid',
      priority: 3,
      active: true
    },
    active: true,
    products: [
      {
        id: 'dw-1',
        title: 'Classic Petite Melrose',
        model: 'Rose Gold, 32mm',
        price: '$199',
        images: [
          { url: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop&q=80', alt: 'Classic Petite Melrose in Rose Gold', aspectRatio: 'aspect-[1/1]' }
        ],
        tag: 'BESTSELLER',
        slug: generateSlug('Classic Petite Melrose', 'Rose Gold 32mm'),
        category: 'watches'
      },
      {
        id: 'dw-2',
        title: 'Classic Sheffield',
        model: 'Silver, 40mm',
        price: '$229',
        images: [
          { url: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=600&h=600&fit=crop&q=80', alt: 'Classic Sheffield in Silver', aspectRatio: 'aspect-[1/1]' }
        ],
        slug: generateSlug('Classic Sheffield', 'Silver 40mm'),
        category: 'watches'
      }
    ],
    metadata: {
      createdAt: '2025-01-04T10:00:00Z',
      updatedAt: '2025-01-04T15:30:00Z',
      totalProducts: 2,
      averagePrice: 214
    }
  },

  'mr-jones-watches': {
    id: 'mr-jones-watches',
    name: 'Mr Jones Watches',
    tagline: 'We make unforgettable watches',
    story: 'Mr Jones Watches creates unusual watches which tell a story, start a conversation or simply make you smile. We are a passionate team working from our London studios to bring you watches that are a bit different.',
    heroImage: 'https://ext.same-assets.com/2203422482/2515575930.jpeg',
    website: 'https://mrjoneswatches.com',
    founded: '2007',
    location: 'London, England',
    priceRange: 'mid',
    categories: [
      { category: 'watches', featured: true, priority: 2, active: true }
    ],
    trending: {
      promoted: false,
      promotionType: 'new',
      priority: 10,
      active: true
    },
    active: true,
    products: [
      {
        id: 'mjw-1',
        title: 'A perfectly useless afternoon',
        model: 'Blue',
        price: '£195.00',
        images: [
          { url: 'https://ext.same-assets.com/2203422482/512678917.jpeg', alt: 'A perfectly useless afternoon watch', aspectRatio: 'aspect-[1/1]' }
        ],
        tag: 'ARTISTIC',
        slug: generateSlug('A perfectly useless afternoon', 'Blue'),
        category: 'watches'
      },
      {
        id: 'mjw-2',
        title: 'Ricochet',
        model: 'Limited Edition',
        price: '£275.00',
        images: [
          { url: 'https://ext.same-assets.com/2203422482/2820538818.jpeg', alt: 'Ricochet Limited Edition watch', aspectRatio: 'aspect-[1/1]' }
        ],
        tag: 'LIMITED',
        slug: generateSlug('Ricochet', 'Limited Edition'),
        category: 'watches'
      }
    ],
    metadata: {
      createdAt: '2025-01-04T16:00:00Z',
      updatedAt: '2025-01-04T16:00:00Z',
      totalProducts: 2,
      averagePrice: 235
    }
  },

  'triwa': {
    id: 'triwa',
    name: 'TRIWA',
    tagline: 'Time for Oceans - Sustainable Watches',
    story: 'TRIWA creates sustainable watches that boldly champion awareness and change, driven by our unwavering commitment to bring positive impact to our world. Our Time for Oceans collection features watches made from recycled ocean plastic.',
    heroImage: 'https://ext.same-assets.com/3339224669/2696985554.jpeg',
    website: 'https://triwa.com',
    founded: '2007',
    location: 'Stockholm, Sweden',
    priceRange: 'mid',
    categories: [
      { category: 'watches', featured: true, priority: 3, active: true }
    ],
    trending: {
      promoted: true,
      promotionType: 'exclusive',
      priority: 5,
      campaignEndDate: '2025-02-01',
      active: true
    },
    active: true,
    products: [
      {
        id: 'triwa-1',
        title: 'Ocean Plastic Timer Blue',
        model: 'Sustainable Collection',
        price: '$214.00',
        images: [
          { url: 'https://ext.same-assets.com/3339224669/3385789620.png', alt: 'Ocean Plastic Timer Blue', aspectRatio: 'aspect-[1/1]' }
        ],
        tag: 'SUSTAINABLE',
        slug: generateSlug('Ocean Plastic Timer Blue', 'Sustainable Collection'),
        category: 'watches'
      },
      {
        id: 'triwa-2',
        title: 'SSAB Fossil Free Steel',
        model: 'Blue',
        price: '$267.00',
        images: [
          { url: 'https://ext.same-assets.com/3339224669/1452265458.png', alt: 'SSAB Fossil Free Steel watch', aspectRatio: 'aspect-[1/1]' }
        ],
        tag: 'ECO-FRIENDLY',
        slug: generateSlug('SSAB Fossil Free Steel', 'Blue'),
        category: 'watches'
      }
    ],
    metadata: {
      createdAt: '2025-01-04T16:00:00Z',
      updatedAt: '2025-01-04T16:00:00Z',
      totalProducts: 2,
      averagePrice: 240.5
    }
  },

  'undone': {
    id: 'undone',
    name: 'UNDONE',
    tagline: 'Custom Watches - Your Story, Your Moment',
    story: 'UNDONE is the world\'s leading custom watch brand. We believe individuality matters - design your own custom-made watch online today and let your personality shine through with limitless customization possibilities.',
    heroImage: 'https://ext.same-assets.com/3157802305/2103087309.png',
    website: 'https://undone.com',
    founded: '2014',
    location: 'Hong Kong',
    priceRange: 'mid',
    categories: [
      { category: 'watches', featured: true, priority: 4, active: true }
    ],
    trending: {
      promoted: false,
      promotionType: 'new',
      priority: 11,
      active: true
    },
    active: true,
    products: [
      {
        id: 'undone-1',
        title: 'Aqua Carbon Maggy',
        model: 'Custom Design',
        price: '$680.00',
        images: [
          { url: 'https://ext.same-assets.com/3157802305/2760313276.jpeg', alt: 'Aqua Carbon Maggy custom watch', aspectRatio: 'aspect-[1/1]' }
        ],
        tag: 'CUSTOM',
        slug: generateSlug('Aqua Carbon Maggy', 'Custom Design'),
        category: 'watches'
      },
      {
        id: 'undone-2',
        title: 'Vintage Killy',
        model: 'Heritage Collection',
        price: '$450.00',
        images: [
          { url: 'https://ext.same-assets.com/3157802305/239172405.jpeg', alt: 'Vintage Killy Heritage watch', aspectRatio: 'aspect-[1/1]' }
        ],
        tag: 'VINTAGE',
        slug: generateSlug('Vintage Killy', 'Heritage Collection'),
        category: 'watches'
      }
    ],
    metadata: {
      createdAt: '2025-01-04T16:00:00Z',
      updatedAt: '2025-01-04T16:00:00Z',
      totalProducts: 2,
      averagePrice: 565
    }
  },

  'cluse': {
    id: 'cluse',
    name: 'CLUSE',
    tagline: 'Modern watches, jewellery and bags',
    story: 'CLUSE creates modern watches, jewellery and bags for men and women. Our minimalist Dutch design philosophy celebrates understated elegance and timeless style with contemporary touches.',
    heroImage: 'https://ext.same-assets.com/2844358747/380663606.jpeg',
    website: 'https://cluse.com',
    founded: '2013',
    location: 'Amsterdam, Netherlands',
    priceRange: 'budget',
    categories: [
      { category: 'watches', featured: true, priority: 5, active: true }
    ],
    trending: {
      promoted: false,
      promotionType: 'sale',
      priority: 12,
      active: true
    },
    active: true,
    products: [
      {
        id: 'cluse-1',
        title: 'Gracieuse Petite Watch',
        model: 'Steel, White, Gold Colour',
        price: '€109.95',
        images: [
          { url: 'https://ext.same-assets.com/2844358747/1987259623.jpeg', alt: 'Gracieuse Petite Watch in Gold', aspectRatio: 'aspect-[1/1]' }
        ],
        tag: 'BESTSELLER',
        slug: generateSlug('Gracieuse Petite Watch', 'Steel White Gold'),
        category: 'watches'
      },
      {
        id: 'cluse-2',
        title: 'Minuit Multifunction Watch',
        model: 'Steel, Full Gold colour',
        price: '€71.97',
        originalPrice: '€119.95',
        images: [
          { url: 'https://ext.same-assets.com/2844358747/2460001243.jpeg', alt: 'Minuit Multifunction Watch in Gold', aspectRatio: 'aspect-[1/1]' }
        ],
        tag: 'SALE',
        slug: generateSlug('Minuit Multifunction Watch', 'Steel Full Gold'),
        category: 'watches'
      }
    ],
    metadata: {
      createdAt: '2025-01-04T16:00:00Z',
      updatedAt: '2025-01-04T16:00:00Z',
      totalProducts: 2,
      averagePrice: 90.96
    }
  },

  'vincero-collective': {
    id: 'vincero-collective',
    name: 'Vincero Collective',
    tagline: 'One Day or Day One. You Decide.',
    story: 'Moments matter. At Vincero, we craft designs to commemorate the moments that matter most, so you never lose sight of what drives you forward. Our men\'s jewelry, watches, and eyewear celebrate life\'s defining moments.',
    heroImage: 'https://ext.same-assets.com/1391019832/570626657.jpeg',
    website: 'https://vincerocollective.com',
    founded: '2014',
    location: 'San Diego, CA',
    priceRange: 'mid',
    categories: [
      { category: 'watches', featured: true, priority: 6, active: true }
    ],
    trending: {
      promoted: false,
      promotionType: 'sale',
      priority: 13,
      active: true
    },
    active: true,
    products: [
      {
        id: 'vincero-1',
        title: 'Father\'s Edition',
        model: 'Girl Dad',
        price: '$329.00',
        originalPrice: '$379.00',
        images: [
          { url: 'https://ext.same-assets.com/1391019832/393143447.jpeg', alt: 'Father\'s Edition Girl Dad watch', aspectRatio: 'aspect-[1/1]' }
        ],
        tag: 'LIMITED',
        slug: generateSlug('Father\'s Edition', 'Girl Dad'),
        category: 'watches'
      },
      {
        id: 'vincero-2',
        title: 'Chrono Limited Edition',
        model: 'Blue Phantom',
        price: '$303.20',
        originalPrice: '$379.00',
        images: [
          { url: 'https://ext.same-assets.com/1391019832/366654346.jpeg', alt: 'Chrono Limited Edition Blue Phantom', aspectRatio: 'aspect-[1/1]' }
        ],
        tag: 'LIMITED',
        slug: generateSlug('Chrono Limited Edition', 'Blue Phantom'),
        category: 'watches'
      }
    ],
    metadata: {
      createdAt: '2025-01-04T16:00:00Z',
      updatedAt: '2025-01-04T16:00:00Z',
      totalProducts: 2,
      averagePrice: 316.1
    }
  },

  'lululemon': {
    id: 'lululemon',
    name: 'Lululemon',
    tagline: 'Tech-Enhanced Activewear',
    story: 'Lululemon creates premium athletic wear designed for yoga, running, training, and life. Our innovative fabrics and thoughtful design help you move through your day with confidence.',
    heroImage: 'https://images.lululemon.com/is/image/lululemon/na_Jun25_wk5_W_Train_3_1_D_HP?wid=2420',
    website: 'https://shop.lululemon.com',
    founded: '1998',
    location: 'Vancouver, Canada',
    priceRange: 'luxury',
    categories: [
      { category: 'fashion', featured: false, priority: 3, active: true },
      { category: 'fitness', featured: true, priority: 1, active: true }
    ],
    trending: {
      promoted: true,
      promotionType: 'paid',
      priority: 4,
      active: true
    },
    active: true,
    products: [
      {
        id: 'lulu-1',
        title: 'Align High-Rise Pant',
        model: 'Black, Size 6',
        price: '$128',
        images: [
          { url: 'https://images.unsplash.com/photo-1506629905607-d9f2e5e78824?w=600&h=600&fit=crop&q=80', alt: 'Align High-Rise Pant in Black' }
        ],
        tag: 'BESTSELLER',
        slug: generateSlug('Align High-Rise Pant', 'Black Size 6'),
        category: 'fitness'
      },
      {
        id: 'lulu-2',
        title: 'Everywhere Belt Bag',
        model: 'Cayenne',
        price: '$38',
        images: [
          { url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&q=80', alt: 'Everywhere Belt Bag in Cayenne' }
        ],
        stock: 'Few left',
        slug: generateSlug('Everywhere Belt Bag', 'Cayenne'),
        category: 'fitness'
      }
    ],
    metadata: {
      createdAt: '2025-01-04T10:00:00Z',
      updatedAt: '2025-01-04T15:30:00Z',
      totalProducts: 2,
      averagePrice: 83
    }
  },

  'cncpts': {
    id: 'cncpts',
    name: 'CNCPTS',
    tagline: 'Streetwear, Luxury Fashion & Footwear',
    story: 'CNCPTS is a premier streetwear and luxury fashion retailer offering curated collections of footwear, apparel and accessories from the world\'s most sought-after brands.',
    heroImage: 'http://cncpts.com/cdn/shop/articles/cncpts_miami_store_hero_1.jpg?v=1733842520',
    website: 'https://cncpts.com',
    founded: '2004',
    location: 'Toronto, Canada',
    priceRange: 'luxury',
    categories: [
      { category: 'fashion', featured: true, priority: 4, active: true }
    ],
    trending: {
      promoted: false,
      promotionType: 'new',
      priority: 6,
      active: true
    },
    active: true,
    products: [
      {
        id: 'cncpts-1',
        title: 'Air Jordan 3 Retro',
        model: 'White/Metallic Silver',
        price: '$205',
        images: [
          { url: 'https://cdn.shopify.com/s/files/1/0043/5673/5045/files/198481069712-1.jpg?v=1749833921', alt: 'Air Jordan 3 Retro in White/Metallic Silver', aspectRatio: 'aspect-[4/3]' }
        ],
        tag: 'ICONIC',
        slug: generateSlug('Air Jordan 3 Retro', 'White/Metallic Silver'),
        category: 'fashion'
      },
      {
        id: 'cncpts-2',
        title: 'Market Bubble Letter T-Shirt',
        model: 'White',
        price: '$16',
        originalPrice: '$20',
        images: [
          { url: 'https://cdn.shopify.com/s/files/1/0043/5673/5045/products/Market_BubbleLetterT-ShirtWHITE_399001108_01.jpg?v=1660570395', alt: 'Market Bubble Letter T-Shirt in White', aspectRatio: 'aspect-[3/4]' }
        ],
        tag: 'SALE',
        slug: generateSlug('Market Bubble Letter T-Shirt', 'White'),
        category: 'fashion'
      }
    ],
    metadata: {
      createdAt: '2025-01-04T10:00:00Z',
      updatedAt: '2025-01-04T15:30:00Z',
      totalProducts: 2,
      averagePrice: 110.5
    }
  }
};

// HELPER FUNCTIONS FOR DATA ACCESS
export const getBrandById = (id: string): BrandData | undefined => {
  return BRANDS_DATABASE[id];
};

export const getAllBrands = (): BrandData[] => {
  return Object.values(BRANDS_DATABASE);
};

export const getActiveBrands = (): BrandData[] => {
  return getAllBrands().filter(brand => brand.active);
};

export const getBrandsByCategory = (category: CategoryAssignment['category']): BrandData[] => {
  return getActiveBrands().filter(brand =>
    brand.categories.some(cat => cat.category === category && cat.active)
  );
};

export const getTrendingBrands = (): BrandData[] => {
  return getActiveBrands()
    .filter(brand => brand.trending.promoted && brand.trending.active)
    .sort((a, b) => a.trending.priority - b.trending.priority);
};

export const getFeaturedBrandsForCategory = (category: CategoryAssignment['category']): BrandData[] => {
  return getBrandsByCategory(category)
    .filter(brand => brand.categories.some(cat => cat.category === category && cat.featured))
    .sort((a, b) => {
      const aCategory = a.categories.find(cat => cat.category === category);
      const bCategory = b.categories.find(cat => cat.category === category);
      return (aCategory?.priority || 999) - (bCategory?.priority || 999);
    });
};

export const searchBrands = (query: string): BrandData[] => {
  const searchTerm = query.toLowerCase();
  return getActiveBrands().filter(brand =>
    brand.name.toLowerCase().includes(searchTerm) ||
    brand.tagline.toLowerCase().includes(searchTerm) ||
    brand.story.toLowerCase().includes(searchTerm)
  );
};

export const getBrandsByPriceRange = (priceRange: BrandData['priceRange']): BrandData[] => {
  return getActiveBrands().filter(brand => brand.priceRange === priceRange);
};

export const getRecentlyUpdatedBrands = (limit = 5): BrandData[] => {
  return getActiveBrands()
    .sort((a, b) => new Date(b.metadata.updatedAt).getTime() - new Date(a.metadata.updatedAt).getTime())
    .slice(0, limit);
};

// CATEGORY CONFIGURATION
export const CATEGORY_CONFIG = {
  fashion: {
    name: 'Fashion',
    description: 'Contemporary fashion for confident individuals',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop&q=80'
  },
  watches: {
    name: 'Watches',
    description: 'Timepieces that tell your story',
    heroImage: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&h=400&fit=crop&q=80'
  },
  fitness: {
    name: 'Fitness',
    description: 'Premium activewear for every movement',
    heroImage: 'https://images.unsplash.com/photo-1506629905607-d9f2e5e78824?w=1200&h=400&fit=crop&q=80'
  },
  beauty: {
    name: 'Beauty',
    description: 'Beauty essentials for your daily routine',
    heroImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=400&fit=crop&q=80'
  }
} as const;

// TRENDING CONFIGURATION
export const TRENDING_CONFIG = {
  maxTrendingBrands: 12,
  defaultCampaignDuration: 30, // days
  promotionTypes: {
    paid: { name: 'Paid Promotion', color: '#FFD700' },
    featured: { name: 'Featured', color: '#FF6B6B' },
    new: { name: 'New', color: '#4ECDC4' },
    sale: { name: 'Sale', color: '#FF8B5A' },
    exclusive: { name: 'Exclusive', color: '#845EC2' }
  }
} as const;

export default BRANDS_DATABASE;
