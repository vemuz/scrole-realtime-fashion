import { NextResponse } from "next/server";

// Enhanced function to generate URL-safe slugs (duplicated for consistency)
function generateSlug(title: string, model: string): string {
  const combined = `${title} ${model}`;

  let slug = combined
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s\-]/g, "")
    .trim()
    .replace(/\s+/g, "_")
    .replace(/-+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

  if (slug.length === 0) {
    slug = `product_${Date.now()}`;
  }

  if (slug.length > 100) {
    slug = slug.substring(0, 100).replace(/_[^_]*$/, "");
  }

  return slug;
}

// Brand data structure (same as in other files)
interface BrandProduct {
  id: number;
  title: string;
  model: string;
  image: string;
  price: string;
  originalPrice?: string;
  tag?: string;
  stock?: string;
  url?: string;
  slug?: string;
}

interface BrandData {
  name: string;
  products: BrandProduct[];
}

// Centralized brand data
const brandData: Record<string, BrandData> = {
  cncpts: {
    name: "CNCPTS",
    products: [
      {
        id: 1,
        title: "Nike Pegasus Premium",
        model: "Anthracite/Pure Platinum/Ashen Slate",
        image:
          "https://cdn.shopify.com/s/files/1/0043/5673/5045/files/198481507542-1.jpg?v=1751390993",
        price: "$220",
        slug: generateSlug(
          "Nike Pegasus Premium",
          "Anthracite/Pure Platinum/Ashen Slate",
        ),
      },
      {
        id: 2,
        title: "Air Jordan 3 Retro",
        model: "White/Metallic Silver",
        image:
          "https://cdn.shopify.com/s/files/1/0043/5673/5045/files/198481069712-1.jpg?v=1749833921",
        price: "$205",
        slug: generateSlug("Air Jordan 3 Retro", "White/Metallic Silver"),
      },
      {
        id: 3,
        title: "Air Jordan 3 Retro Kids",
        model: "White/Metallic Silver",
        image:
          "https://cdn.shopify.com/s/files/1/0043/5673/5045/files/198481068937-1.jpg?v=1749833901",
        price: "$150",
        slug: generateSlug("Air Jordan 3 Retro Kids", "White/Metallic Silver"),
      },
      {
        id: 4,
        title: "Boy Smells Ash",
        model: "Woody/Earthy",
        image:
          "https://cdn.shopify.com/s/files/1/0043/5673/5045/files/810012090018-1.jpg?v=1749754499",
        price: "$48",
        slug: generateSlug("Boy Smells Ash", "Woody/Earthy"),
      },
      {
        id: 5,
        title: "Market Bubble Letter T-Shirt",
        model: "White",
        image:
          "https://cdn.shopify.com/s/files/1/0043/5673/5045/products/Market_BubbleLetterT-ShirtWHITE_399001108_01.jpg?v=1660570395",
        price: "$16",
        slug: generateSlug("Market Bubble Letter T-Shirt", "White"),
      },
      {
        id: 6,
        title: "Market Racing Logo Sweatpants",
        model: "Ash",
        image:
          "https://cdn.shopify.com/s/files/1/0043/5673/5045/products/Market_MarketRacingLogoSweatpantsASH_395000504_01.jpg?v=1660570224",
        price: "$45",
        slug: generateSlug("Market Racing Logo Sweatpants", "Ash"),
      },
      {
        id: 7,
        title: "1017 ALYX 9SM Black Cotton D Pant",
        model: "Black",
        image:
          "https://cdn.shopify.com/s/files/1/0043/5673/5045/products/ALYX_BLKCottonDPantBLACK_AAWPA0289FA01.F22-0001_01.jpg?v=1677185826",
        price: "$174",
        slug: generateSlug("1017 ALYX 9SM Black Cotton D Pant", "Black"),
      },
      {
        id: 8,
        title: "Market Exotic Automobile Tee",
        model: "Black",
        image:
          "https://cdn.shopify.com/s/files/1/0043/5673/5045/products/Market_MarketExoticAutomobileTeeBLACK_399000986_01.jpg?v=1656596715",
        price: "$16",
        slug: generateSlug("Market Exotic Automobile Tee", "Black"),
      },
      {
        id: 9,
        title: "Nike SB Zoom Blazer Low Pro GT",
        model: "Black/Anthracite",
        image:
          "https://cdn.shopify.com/s/files/1/0043/5673/5045/products/Nike_SBZoomBlazerLowProGTBLACKANTHRACITE_DC7695-003_1.jpg?v=1638365539",
        price: "$72",
        slug: generateSlug(
          "Nike SB Zoom Blazer Low Pro GT",
          "Black/Anthracite",
        ),
      },
      {
        id: 10,
        title: "Dime Space Turkey T-Shirt",
        model: "Black",
        image:
          "https://cdn.shopify.com/s/files/1/0043/5673/5045/files/400003898923-1.jpg?v=1751309692",
        price: "$43",
        slug: generateSlug("Dime Space Turkey T-Shirt", "Black"),
      },
      {
        id: 11,
        title: "Carpet Company Cargo Sweatpants",
        model: "Black",
        image:
          "https://cdn.shopify.com/s/files/1/0043/5673/5045/files/400003676477-1.jpg?v=1737053672",
        price: "$83",
        slug: generateSlug("Carpet Company Cargo Sweatpants", "Black"),
      },
      {
        id: 12,
        title: "Comme Des Garcons PLAY Converse Chuck Taylor",
        model: "Grey",
        image:
          "https://cdn.shopify.com/s/files/1/0043/5673/5045/files/194433008921-1.jpg?v=1736870059",
        price: "$75",
        slug: generateSlug(
          "Comme Des Garcons PLAY Converse Chuck Taylor",
          "Grey",
        ),
      },
    ],
  },
  everlane: {
    name: "Everlane",
    products: [
      {
        id: 1,
        title: "The Lace Trim Caftan Dress",
        model: "White",
        image: "https://ext.same-assets.com/1014321061/3842799923.jpeg",
        price: "$98",
        slug: generateSlug("The Lace Trim Caftan Dress", "White"),
      },
      {
        id: 2,
        title: "The Gauze Smock Dress",
        model: "White / Mazarine Blue",
        image: "https://ext.same-assets.com/1014321061/3469972426.jpeg",
        price: "$88",
        slug: generateSlug("The Gauze Smock Dress", "White Mazarine Blue"),
      },
      {
        id: 3,
        title: "The Gauze Mini Tiered Dress",
        model: "Soft Cobalt Floral",
        image: "https://ext.same-assets.com/1014321061/251136064.png",
        price: "$88",
        slug: generateSlug("The Gauze Mini Tiered Dress", "Soft Cobalt Floral"),
      },
      {
        id: 4,
        title: "The V-Neck Dress",
        model: "SoftLuxe Banana Crepe",
        image: "https://ext.same-assets.com/1014321061/998040851.jpeg",
        price: "$98",
        slug: generateSlug("The V-Neck Dress", "SoftLuxe Banana Crepe"),
      },
      {
        id: 5,
        title: "The Eyelet Midi Dress",
        model: "Bone",
        image: "https://ext.same-assets.com/1014321061/3759678322.jpeg",
        price: "$118",
        slug: generateSlug("The Eyelet Midi Dress", "Bone"),
      },
      {
        id: 6,
        title: "The Gauze Smock Dress",
        model: "Navy",
        image: "https://ext.same-assets.com/1014321061/2919539626.jpeg",
        price: "$88",
        slug: generateSlug("The Gauze Smock Dress", "Navy"),
      },
    ],
  },
  "daniel-wellington": {
    name: "Daniel Wellington",
    products: [
      {
        id: 1,
        title: "Classic Petite Melrose",
        model: "Rose Gold, 32mm",
        image:
          "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop&q=80",
        price: "$199",
        slug: generateSlug("Classic Petite Melrose", "Rose Gold 32mm"),
      },
      {
        id: 2,
        title: "Classic Sheffield",
        model: "Silver, 40mm",
        image:
          "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=600&h=600&fit=crop&q=80",
        price: "$229",
        slug: generateSlug("Classic Sheffield", "Silver 40mm"),
      },
    ],
  },
  bebe: {
    name: "bebe",
    products: [
      {
        id: 1,
        title: "Ombre Chiffon Cowl Dress",
        model: "Brown White",
        image: "https://ext.same-assets.com/2255372474/1693421825.jpeg",
        price: "$118",
        url: "https://www.bebe.com/collections/new-dresses/products/ombre-chiffon-cowl-dress-brown-white",
        slug: generateSlug("Ombre Chiffon Cowl Dress", "Brown White"),
      },
      {
        id: 2,
        title: "Ombre Chiffon Cowl Dress",
        model: "Purple Pink",
        image: "https://ext.same-assets.com/2255372474/1410155671.jpeg",
        price: "$118",
        url: "https://www.bebe.com/collections/new-dresses/products/ombre-chiffon-cowl-dress-purple-pink",
        slug: generateSlug("Ombre Chiffon Cowl Dress", "Purple Pink"),
      },
      {
        id: 3,
        title: "Ombre Chiffon Cowl Dress",
        model: "Black Red",
        image: "https://ext.same-assets.com/2255372474/2776777039.jpeg",
        price: "$118",
        url: "https://www.bebe.com/collections/new-dresses/products/ombre-chiffon-cowl-dress-black-red",
        slug: generateSlug("Ombre Chiffon Cowl Dress", "Black Red"),
      },
      {
        id: 4,
        title: "3D Floral Strapless Gown",
        model: "Black",
        image:
          "https://www.bebe.com/cdn/shop/files/bebe1364_black_1_b6b17418-2867-4f15-8fa9-be0986994c8c_750x.jpg?v=1748558657",
        price: "$198",
        url: "https://www.bebe.com/collections/new-dresses/products/3d-floral-strapless-gown-black",
        slug: generateSlug("3D Floral Strapless Gown", "Black"),
      },
      {
        id: 5,
        title: "Sleeveless Pleated Dress",
        model: "Royal",
        image:
          "https://www.bebe.com/cdn/shop/files/267320_royal_1_750x.jpg?v=1748883992",
        price: "$98",
        url: "https://www.bebe.com/collections/new-dresses/products/sleeveless-pleated-dress-royal",
        slug: generateSlug("Sleeveless Pleated Dress", "Royal"),
      },
      {
        id: 6,
        title: "Light Weight Ruffle Detail Denim Dress",
        model: "Light Blue Wash",
        image:
          "https://www.bebe.com/cdn/shop/files/7swn0212be_light-blue-wash_1_8ff5aac3-d386-4371-81de-c61f09cde146_750x.jpg?v=1748555538",
        price: "$88",
        url: "https://www.bebe.com/collections/new-dresses/products/light-weight-ruffle-detail-denim-dress-light-blue-wash",
        slug: generateSlug(
          "Light Weight Ruffle Detail Denim Dress",
          "Light Blue Wash",
        ),
      },
    ],
  },
  lululemon: {
    name: "Lululemon",
    products: [
      {
        id: 1,
        title: "Align High-Rise Pant",
        model: "Black, Size 6",
        image:
          "https://images.unsplash.com/photo-1506629905607-d9f2e5e78824?w=600&h=600&fit=crop&q=80",
        price: "$128",
        slug: generateSlug("Align High-Rise Pant", "Black Size 6"),
      },
      {
        id: 2,
        title: "Everywhere Belt Bag",
        model: "Cayenne",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&q=80",
        price: "$38",
        slug: generateSlug("Everywhere Belt Bag", "Cayenne"),
      },
    ],
  },
  "levis-premium": {
    name: "Levi's Premium",
    products: [
      {
        id: 1,
        title: "511™ SLIM FIT JEANS",
        model: "Black Denim, 31x32",
        image:
          "https://target.scene7.com/is/image/Target/GUEST_11a3b8a1-0b5b-4b5a-9b1a-1b5b4b5a9b1a?qlt=80&fmt=webp&hei=600&wid=600",
        price: "$59.99",
        slug: generateSlug("511™ SLIM FIT JEANS", "Black Denim 31x32"),
      },
      {
        id: 2,
        title: "TRUCKER JACKET",
        model: "Vintage Khaki",
        image:
          "https://target.scene7.com/is/image/Target/GUEST_9c8e9b1a-1b5b-4b5a-9b1a-1b5b4b5a9b1a?qlt=80&fmt=webp&hei=600&wid=600",
        price: "$67.99",
        slug: generateSlug("TRUCKER JACKET", "Vintage Khaki"),
      },
      {
        id: 3,
        title: "505™ REGULAR FIT JEANS",
        model: "Black Denim",
        image:
          "https://target.scene7.com/is/image/Target/GUEST_ce8a9b1a-1b5b-4b5a-9b1a-1b5b4b5a9b1a?qlt=80&fmt=webp&hei=600&wid=600",
        price: "$59.99",
        slug: generateSlug("505™ REGULAR FIT JEANS", "Black Denim"),
      },
      {
        id: 4,
        title: "XX TAPERED TECH CHINO PANTS",
        model: "Charcoal Gray",
        image:
          "https://target.scene7.com/is/image/Target/GUEST_b1c2a3d4-1b5b-4b5a-9b1a-1b5b4b5a9b1a?qlt=80&fmt=webp&hei=600&wid=600",
        price: "$59.99",
        slug: generateSlug("XX TAPERED TECH CHINO PANTS", "Charcoal Gray"),
      },
      {
        id: 5,
        title: "CLASSIC FIT CREWNECK T-SHIRT",
        model: "Navy Blue",
        image:
          "https://target.scene7.com/is/image/Target/GUEST_76a1b2c3-1b5b-4b5a-9b1a-1b5b4b5a9b1a?qlt=80&fmt=webp&hei=600&wid=600",
        price: "$19.99",
        slug: generateSlug("CLASSIC FIT CREWNECK T-SHIRT", "Navy Blue"),
      },
      {
        id: 6,
        title: "BATWING LOGO T-SHIRT",
        model: "White",
        image:
          "https://target.scene7.com/is/image/Target/GUEST_a6d4e5f6-1b5b-4b5a-9b1a-1b5b4b5a9b1a?qlt=80&fmt=webp&hei=600&wid=600",
        price: "$15.99",
        slug: generateSlug("BATWING LOGO T-SHIRT", "White"),
      },
    ],
  },
};

function generateSitemap() {
  const baseUrl = "https://same-sh0qv6h1xgk-latest.netlify.app";
  const currentDate = new Date().toISOString();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Category Pages -->
  <url>
    <loc>${baseUrl}/fashion</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/watches</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/fitness</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/beauty</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;

  // Brand pages
  Object.keys(brandData).forEach((brandName) => {
    sitemap += `  <!-- ${brandData[brandName].name} Brand Page -->
  <url>
    <loc>${baseUrl}/brand/${brandName}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  // Product pages with SEO-friendly URLs
  Object.keys(brandData).forEach((brandName) => {
    const brand = brandData[brandName];
    brand.products.forEach((product) => {
      const productSlug =
        product.slug || generateSlug(product.title, product.model);
      sitemap += `  <!-- ${product.title} - ${product.model} -->
  <url>
    <loc>${baseUrl}/product/${brandName}/${productSlug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
    });
  });

  sitemap += "</urlset>";

  return sitemap;
}

export async function GET() {
  const sitemap = generateSitemap();

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600", // Cache for 1 hour
    },
  });
}
