import RequestDiscountButton from "@/components/RequestDiscountButton";
import SharedFooter from "@/components/SharedFooter";
import { getBrandById, getShopifyDomain, isLiveBrand } from "@/data/brands";
import {
  fetchShopifyProducts,
  transformShopifyProduct,
} from "@/services/shopify";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    brandName: string;
    productId: string;
  }>;
}

async function getProductData(brandName: string, productId: string) {
  const brand = getBrandById(brandName);
  if (!brand || !brand.isLive) return null;

  const shopifyDomain = getShopifyDomain(brandName);
  if (!shopifyDomain) return null;

  try {
    const shopifyProducts = await fetchShopifyProducts(shopifyDomain);
    const dynamicProduct = shopifyProducts.find((p) => p.handle === productId);

    if (dynamicProduct) {
      return {
        product: transformShopifyProduct(dynamicProduct, shopifyDomain),
        brand,
        isDynamic: true,
      };
    }
  } catch (error) {
    console.error(`Error fetching dynamic product from ${brandName}:`, error);
  }

  return null;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { brandName, productId } = await params;
  const data = await getProductData(brandName, productId);

  if (!data) {
    notFound();
  }

  const { product, brand, isDynamic } = data;

  // Type assertion for dynamic products that have extended data
  const dynamicProduct = isDynamic ? (product as any) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <h1
                  className="font-bold tracking-tight text-gray-900"
                  style={{
                    fontFamily: "Superclarendon, serif",
                    fontSize: "28px",
                  }}
                >
                  scrole
                </h1>
              </Link>
            </div>
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Trending
              </Link>
              <Link href="/fashion" className="text-blue-600 font-medium">
                Fashion
              </Link>
              <Link
                href="/watches"
                className="text-gray-600 hover:text-gray-900"
              >
                Watches
              </Link>
              <Link
                href="/fitness"
                className="text-gray-600 hover:text-gray-900"
              >
                Fitness
              </Link>
              <Link
                href="/beauty"
                className="text-gray-600 hover:text-gray-900"
              >
                Beauty
              </Link>
            </nav>
            {/* Icons and Join Button */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-900 p-2 relative">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  3
                </span>
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href={`/brand/${brandName}`}
              className="text-gray-500 hover:text-gray-700 capitalize"
            >
              {brand.name}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[3/5] relative overflow-hidden rounded-lg bg-white">
              <Image
                src={product.images[0]?.url || "/placeholder-product.jpg"}
                alt={product.images[0]?.alt || product.title}
                fill
                className="object-cover"
                priority
              />
              {/* Live indicator for all products since all brands are now live */}
              <div className="absolute top-4 right-4">
                <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse" />
                  LIVE
                </div>
              </div>
              {product.tag && (
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-black text-white text-sm font-semibold rounded">
                    {product.tag}
                  </span>
                </div>
              )}
            </div>

            {/* Additional Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1, 4).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-[3/4] relative overflow-hidden rounded-lg bg-white"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt || `${product.title} ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              {product.model && (
                <p className="text-lg text-gray-600 mb-4">{product.model}</p>
              )}

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.stock && (
                  <span
                    className={`text-sm font-medium ${
                      product.stock === "In Stock"
                        ? "text-green-600"
                        : product.stock === "Low Stock"
                          ? "text-orange-600"
                          : "text-red-600"
                    }`}
                  >
                    {product.stock}
                  </span>
                )}
              </div>
            </div>

            {/* Product Description */}
            {dynamicProduct?.description && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <div className="prose prose-sm text-gray-700">
                  <p>{dynamicProduct.description}</p>
                </div>
              </div>
            )}

            {/* Product Options (for dynamic products) */}
            {dynamicProduct?.options && dynamicProduct.options.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Available Options
                </h3>
                <div className="space-y-4">
                  {dynamicProduct.options.map((option: any, index: number) => (
                    <div key={index}>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        {option.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map(
                          (value: string, valueIndex: number) => (
                            <span
                              key={valueIndex}
                              className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50"
                            >
                              {value}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Product Variants (for dynamic products) */}
            {dynamicProduct?.variants && dynamicProduct.variants.length > 1 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Available Variants
                </h3>
                <div className="space-y-2">
                  {dynamicProduct.variants
                    .slice(0, 5)
                    .map((variant: any, index: number) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 border border-gray-200 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-gray-900">
                            {variant.title}
                          </p>
                          {variant.sku && (
                            <p className="text-sm text-gray-500">
                              SKU: {variant.sku}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">
                            ${variant.price}
                          </p>
                          <p
                            className={`text-sm ${variant.available ? "text-green-600" : "text-red-600"}`}
                          >
                            {variant.available ? "Available" : "Sold Out"}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              {/* Buy on Brand Button */}
              {product.externalUrl && (
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-black text-white px-6 py-4 rounded-md font-medium hover:bg-gray-800 transition-colors text-center block"
                >
                  Buy on {brand.name}
                </a>
              )}

              {/* Request Discount Code Button */}
              <RequestDiscountButton brandName={brand.name} />
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Product Details
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Brand:</span>
                  <span className="font-medium">{brand.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span className="font-medium capitalize">
                    {product.category}
                  </span>
                </div>
                {product.model && (
                  <div className="flex justify-between">
                    <span>Model:</span>
                    <span className="font-medium">{product.model}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Source:</span>
                  <span className="font-medium text-green-600">
                    Live from{" "}
                    {brand.website.replace("https://", "").replace("www.", "")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SharedFooter />
      </div>
    </div>
  );
}
