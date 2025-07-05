"use client";

import type { BrandProduct } from "@/data/brands";
import {
  fetchShopifyProducts,
  transformShopifyProduct,
} from "@/services/shopify";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DynamicProductGridProps {
  brandDomain: string;
  brandName: string;
  maxProducts?: number;
}

export default function DynamicProductGrid({
  brandDomain,
  brandName,
  maxProducts = 12,
}: DynamicProductGridProps) {
  const [products, setProducts] = useState<BrandProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const shopifyProducts = await fetchShopifyProducts(brandDomain);
        const transformedProducts = shopifyProducts
          .slice(0, maxProducts)
          .map((product) => transformShopifyProduct(product, brandDomain));

        setProducts(transformedProducts);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [brandDomain, maxProducts]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
          >
            <div className="aspect-[3/5] bg-gray-200" />
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-3 bg-gray-200 rounded w-2/3 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">⚠️ {error}</div>
        <button
          onClick={() => window.location.reload()}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-600">
          No products found. Store may be temporarily unavailable.
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${brandName.toLowerCase()}/${product.slug}`}
          className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="aspect-[3/5] relative overflow-hidden">
            <Image
              src={product.images[0]?.url || "/placeholder-product.jpg"}
              alt={product.images[0]?.alt || product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {product.tag && (
              <div className="absolute top-2 left-2">
                <span className="inline-block px-2 py-1 bg-black text-white text-xs font-semibold rounded">
                  {product.tag}
                </span>
              </div>
            )}
            <div className="absolute top-2 right-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
                LIVE
              </div>
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
              {product.title}
            </h4>
            {product.model && (
              <p className="text-sm text-gray-600 mb-2 line-clamp-1">
                {product.model}
              </p>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-gray-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-500">{product.stock}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
