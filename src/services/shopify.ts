// Shopify Product Fetching Service
import type { BrandProduct, ProductImage } from "@/data/brands";
export interface ShopifyProduct {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  images: ShopifyImage[];
  variants: ShopifyVariant[];
  options: ShopifyOption[];
  tags: string[];
  vendor: string;
  product_type: string;
  published_at: string;
}

export interface ShopifyImage {
  id: number;
  src: string;
  width: number;
  height: number;
  alt?: string;
}

export interface ShopifyVariant {
  id: number;
  title: string;
  price: string;
  compare_at_price?: string;
  available: boolean;
  option1?: string;
  option2?: string;
  sku: string;
}

export interface ShopifyOption {
  name: string;
  values: string[];
}

export interface ShopifyResponse {
  products: ShopifyProduct[];
}

// Fetch products from any Shopify store
export async function fetchShopifyProducts(
  domain: string,
): Promise<ShopifyProduct[]> {
  try {
    const url = `https://${domain}/products.json`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch products from ${domain}: ${response.status}`,
      );
    }

    const data: ShopifyResponse = await response.json();

    // Filter out products with $0.00 price or invalid pricing
    return data.products.filter((product) => {
      const firstVariant = product.variants[0];
      if (!firstVariant) return false;

      const price = Number.parseFloat(firstVariant.price);
      return price > 0; // Only include products with valid pricing
    });
  } catch (error) {
    console.error(`Error fetching products from ${domain}:`, error);
    return [];
  }
}

// Transform Shopify product to our format
// Helper function to clean HTML from product descriptions
function cleanHtmlDescription(htmlString: string): string {
  if (!htmlString) return "";

  // Remove HTML tags and decode entities
  return htmlString
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\\u003c/g, "<")
    .replace(/\\u003e/g, ">")
    .replace(/\\/g, "")
    .trim();
}

// Enhanced product transformation with detailed Shopify data
export function transformShopifyProduct(
  shopifyProduct: ShopifyProduct,
  brandDomain?: string,
): BrandProduct & {
  description: string;
  options: ShopifyOption[];
  variants: ShopifyVariant[];
} {
  const basePrice = shopifyProduct.variants[0]?.price || "0";
  const comparePrice = shopifyProduct.variants[0]?.compare_at_price;

  return {
    id: shopifyProduct.id.toString(),
    title: shopifyProduct.title,
    model: shopifyProduct.product_type || "",
    price: `$${basePrice}`,
    originalPrice: comparePrice ? `$${comparePrice}` : undefined,
    images: shopifyProduct.images.map((img) => ({
      url: img.src,
      alt: img.alt || shopifyProduct.title,
    })) as ProductImage[],
    slug: shopifyProduct.handle,
    category: extractCategory(shopifyProduct.tags),
    tag: extractTag(shopifyProduct.tags),
    stock: calculateStock(shopifyProduct.variants),
    externalUrl: `https://${brandDomain || "www.bebe.com"}/products/${shopifyProduct.handle}`,

    // Enhanced data for detailed product pages
    description: cleanHtmlDescription(shopifyProduct.body_html),
    options: shopifyProduct.options,
    variants: shopifyProduct.variants,
  };
}

function extractCategory(tags: string[]): string {
  const categoryTag = tags.find((tag) => tag.startsWith("category:"));
  return categoryTag ? categoryTag.replace("category:", "") : "fashion";
}

function extractTag(tags: string[]): string | undefined {
  if (tags.includes("item_badge_text_New")) return "New";
  if (tags.includes("autotag_sale")) return "Sale";
  return undefined;
}

function calculateStock(variants: ShopifyVariant[]): string {
  const availableCount = variants.filter((v) => v.available).length;
  const totalCount = variants.length;

  if (availableCount === 0) return "Sold Out";
  if (availableCount < totalCount * 0.3) return "Low Stock";
  return "In Stock";
}
