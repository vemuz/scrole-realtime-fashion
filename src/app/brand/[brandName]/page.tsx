import DynamicProductGrid from "@/components/DynamicProductGrid";
import SharedFooter from "@/components/SharedFooter";
import { getBrandById, getShopifyDomain, isLiveBrand } from "@/data/brands";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BrandPageProps {
  params: Promise<{
    brandName: string;
  }>;
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { brandName } = await params;
  const brand = getBrandById(brandName);

  if (!brand || !brand.isLive) {
    notFound();
  }

  const shopifyDomain = getShopifyDomain(brandName);

  if (!shopifyDomain) {
    notFound();
  }

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
              {/* Wishlist Icon */}
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
              {/* Cart Icon with Badge */}
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

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={brand.heroImage}
          alt={brand.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{brand.name}</h1>
            <p className="text-xl mb-6">{brand.tagline}</p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <span>Founded {brand.founded}</span>
              <span>•</span>
              <span>{brand.location}</span>
              <span>•</span>
              <span className="capitalize">{brand.priceRange} Range</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Story */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{brand.story}</p>
        </div>

        {/* Live Products Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Live Products</h3>
            <div className="text-sm text-green-600 flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Live from{" "}
              {brand.website.replace("https://", "").replace("www.", "")}
            </div>
          </div>

          {/* Dynamic Product Grid for all live brands */}
          <DynamicProductGrid
            brandDomain={shopifyDomain}
            brandName={brandName}
            maxProducts={12}
          />
        </div>

        {/* Brand Info */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-12">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {brand.categories.map((cat, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    cat.featured
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {cat.category}
                  {cat.featured && " ⭐"}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Shared Footer with Ending Soon and Shop by Themes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SharedFooter />
      </div>
    </div>
  );
}
