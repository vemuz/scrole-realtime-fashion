import { getTrendingBrands } from "@/data/brands";
import Link from "next/link";

export default function HomePage() {
  const trendingBrands = getTrendingBrands();

  // Map trending brands to the expected format for display
  const newArrivals = trendingBrands.map((brand, index) => ({
    id: index + 1,
    title: brand.tagline.toUpperCase(),
    brand: brand.name,
    image: brand.heroImage,
    timeLeft: `Sale ends in ${3 + (index % 3)} days`,
    tag:
      brand.trending.promotionType === "featured"
        ? ""
        : brand.trending.promotionType === "paid"
          ? "PREMIUM"
          : brand.trending.promotionType === "new"
            ? "NEW"
            : brand.trending.promotionType === "sale"
              ? "SALE"
              : brand.trending.promotionType === "exclusive"
                ? "EXCLUSIVE"
                : "",
    brandSlug: brand.id,
  }));

  // Get brands with sale promotions or expiring campaigns for "Ending Soon"
  const endingSoonBrands = trendingBrands
    .filter(
      (brand) =>
        brand.trending.promotionType === "sale" ||
        brand.trending.campaignEndDate,
    )
    .slice(0, 4);

  const endingSoon =
    endingSoonBrands.length > 0
      ? endingSoonBrands.map((brand, index) => ({
          id: 14 + index,
          title: brand.tagline.toUpperCase(),
          brand: brand.name,
          image: brand.heroImage,
          timeLeft: brand.trending.campaignEndDate
            ? "Sale ends in about 20 hours"
            : "Sale ends in 2 days",
          tag: brand.trending.promotionType === "sale" ? "EXTRA $20 OFF" : "",
          brandSlug: brand.id,
        }))
      : [
          // Fallback data if no sale brands available
          {
            id: 14,
            title: "ITALIAN LEATHER HANDBAGS",
            brand: "Mansur Gavriel",
            image:
              "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=400&fit=crop&q=80",
            timeLeft: "Sale ends in 2 days",
            tag: "",
            brandSlug: "mansur-gavriel",
          },
          {
            id: 15,
            title: "LUXURY CASHMERE",
            brand: "Brunello Cucinelli",
            image:
              "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=400&fit=crop&q=80",
            timeLeft: "Sale ends in 2 days",
            tag: "",
            brandSlug: "brunello-cucinelli",
          },
          {
            id: 16,
            title: "DESIGNER SNEAKER COLLECTION",
            brand: "Common Projects",
            image:
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop&q=80",
            timeLeft: "Sale ends in 2 days",
            tag: "EXTRA $20 OFF",
            brandSlug: "common-projects",
          },
          {
            id: 17,
            title: "FRENCH PERFUME HOUSE",
            brand: "Diptyque",
            image:
              "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop&q=80",
            timeLeft: "Sale ends in about 20 hours",
            tag: "",
            brandSlug: "diptyque",
          },
        ];

  const shopByCategories = [
    {
      title: "ALL BLACK EVERYTHING",
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=400&fit=crop&q=80",
    },
    {
      title: "LUXURY FASHION",
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop&q=80",
    },
    {
      title: "ACCESSORIES",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop&q=80",
    },
    {
      title: "FASHION (JUST YOUR FIT)",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80",
    },
    {
      title: "SHOES + HANDBAGS",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop&q=80",
    },
    {
      title: "BEAUTY + WELLNESS",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop&q=80",
    },
    {
      title: "OUTDOOR + ACTIVE",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9f2e5e78824?w=600&h=400&fit=crop&q=80",
    },
    {
      title: "SALES UNDER $25",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=400&fit=crop&q=80",
    },
  ];

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
              <Link href="/" className="text-blue-600 font-medium">
                Trending
              </Link>
              <Link
                href="/fashion"
                className="text-gray-600 hover:text-gray-900"
              >
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
                {/* Cart Badge */}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  3
                </span>
              </button>

              {/* Join Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Join
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* View Options */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">View as:</span>
            <div className="flex border border-gray-300 rounded">
              <button className="p-2 bg-blue-600 text-white rounded-l">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-600 border-l border-gray-300 rounded-r">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>New Sales</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Ending Soon</option>
            </select>
          </div>
        </div>

        {/* New Arrivals Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 tracking-wide">
            TRENDING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newArrivals.map((item) => (
              <Link
                key={item.id}
                href={`/brand/${item.brandSlug}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[5/3] object-cover rounded-t-lg"
                  />
                  {item.tag && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">
                      {item.tag}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                  <p className="text-xs text-gray-500">{item.timeLeft}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Brand Banner */}
        <section className="mb-12">
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-600 rounded-lg overflow-hidden h-64">
            <img
              src="https://ext.same-assets.com/1014321061/645627194.jpeg"
              alt="Shop All Fashion"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">
                  SHOP ALL FASHION, BEAUTY & LIFESTYLE
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Ending Soon Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 tracking-wide">
            ENDING SOON
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {endingSoon.map((item) => (
              <Link
                key={item.id}
                href={`/brand/${item.brandSlug}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[5/3] object-cover rounded-t-lg"
                  />
                  {item.tag && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">
                      {item.tag}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                  <p className="text-xs text-gray-500">{item.timeLeft}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Shop by Categories */}
        <section className="mb-12">
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-white tracking-wide">
              SHOP BY THEMES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {shopByCategories.map((category) => (
                <div
                  key={category.title}
                  className="relative group cursor-pointer"
                >
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-lg">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white font-bold text-sm text-center tracking-wider">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">📱 Download Our App</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            {/* Twitter */}
            <a
              href="https://twitter.com/scrole"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com/scrole"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/scrole"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* Pinterest */}
            <a
              href="https://pinterest.com/scrole"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.956 1.404-5.956s-.359-.219-.359-1.219c0-1.144.662-1.998 1.483-1.998.699 0 1.037.524 1.037 1.219 0 .744-.475 1.846-.718 2.874-.205.861.433 1.563 1.281 1.563 1.538 0 2.719-1.626 2.719-3.974 0-2.08-1.494-3.535-3.628-3.535-2.471 0-3.92 1.846-3.92 3.754 0 .744.287 1.544.646 1.979.071.085.082.161.061.248-.066.279-.213.861-.242.982-.038.155-.125.187-.288.113-1.074-.5-1.746-2.065-1.746-3.328 0-2.731 1.982-5.244 5.713-5.244 2.999 0 5.332 2.138 5.332 4.998 0 2.98-1.88 5.375-4.486 5.375-.875 0-1.699-.456-1.979-1.001l-.54 2.059c-.195.755-.723 1.699-1.075 2.275C8.952 23.785 10.438 24 12.017 24c6.642 0 12.017-5.367 12.017-11.987C24.033 5.367 18.658.001 12.017.001z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://tiktok.com/@scrole"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-500 mb-4">
            <a href="/terms" className="hover:text-gray-700">
              Terms
            </a>
            <a href="/privacy" className="hover:text-gray-700">
              Privacy
            </a>
            <a href="/privacy" className="hover:text-gray-700">
              Do not sell my information
            </a>
            <a href="/partner" className="hover:text-gray-700">
              Partner
            </a>
            <a href="/faq" className="hover:text-gray-700">
              FAQ
            </a>
            <a href="/affiliates" className="hover:text-gray-700">
              Affiliates
            </a>
            <a href="/press" className="hover:text-gray-700">
              Press
            </a>
            <a href="/contact" className="hover:text-gray-700">
              Contact
            </a>
            <a href="/manuscript" className="hover:text-gray-700">
              The Manuscript
            </a>
            <a href="/admin" className="hover:text-gray-700">
              Admin
            </a>
          </div>

          <div className="text-center text-gray-500 text-sm">
            © 2012 - 2025 Scrole, Scrole Fashion, LLC.
          </div>
        </div>
      </footer>
    </div>
  );
}
