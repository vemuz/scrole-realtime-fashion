import Link from "next/link";

export default function BeautyPage() {
  const beautyProducts = [
    {
      id: 1,
      title: "LUXURY SKINCARE COLLECTION",
      brand: "La Mer",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop&q=80",
      timeLeft: "Sale ends in 3 days",
      tag: "PREMIUM",
    },
    {
      id: 2,
      title: "CLEAN BEAUTY ESSENTIALS",
      brand: "Glossier",
      image:
        "https://images.unsplash.com/photo-1487218526759-8e4d4c4c0362?w=600&h=400&fit=crop&q=80",
      timeLeft: "Sale ends in 5 days",
      tag: "CLEAN",
    },
    {
      id: 3,
      title: "PROFESSIONAL MAKEUP",
      brand: "Fenty Beauty",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop&q=80",
      timeLeft: "Sale ends in 4 days",
      tag: "INCLUSIVE",
    },
    {
      id: 4,
      title: "ORGANIC WELLNESS",
      brand: "Tata Harper",
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=400&fit=crop&q=80",
      timeLeft: "Sale ends in 6 days",
      tag: "ORGANIC",
    },
    {
      id: 5,
      title: "FRAGRANCE COLLECTION",
      brand: "Tom Ford",
      image:
        "https://images.unsplash.com/photo-1588167866485-b1b2a8b0dcd1?w=600&h=400&fit=crop&q=80",
      timeLeft: "Sale ends in 2 days",
      tag: "LUXURY",
    },
    {
      id: 6,
      title: "K-BEAUTY FAVORITES",
      brand: "Sulwhasoo",
      image:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop&q=80",
      timeLeft: "Sale ends in 7 days",
      tag: "K-BEAUTY",
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
              <Link href="/" className="text-gray-600 hover:text-gray-900">
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
              <Link href="/beauty" className="text-blue-600 font-medium">
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
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">BEAUTY</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover luxury skincare, innovative makeup, and wellness essentials
            from the world's most coveted beauty brands.
          </p>
        </div>

        {/* Beauty Categories */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">SKINCARE</h3>
              <p className="text-sm text-gray-600">Serums, Moisturizers</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">MAKEUP</h3>
              <p className="text-sm text-gray-600">Foundation, Lipstick</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">FRAGRANCE</h3>
              <p className="text-sm text-gray-600">Perfumes & Cologne</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">WELLNESS</h3>
              <p className="text-sm text-gray-600">Self-Care Essentials</p>
            </div>
          </div>
        </section>

        {/* Featured Beauty Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 tracking-wide">
            BEAUTY ESSENTIALS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {beautyProducts.map((item) => (
              <Link
                key={item.id}
                href={`/brand/${item.brand.toLowerCase().replace(/\s+/g, "-")}`}
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

        {/* Beauty Banner */}
        <section className="mb-12">
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-600 rounded-lg overflow-hidden h-64">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=400&fit=crop&q=80"
              alt="Beauty Collection"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">RADIATE CONFIDENCE</h2>
                <p className="text-lg mb-6">
                  Luxury beauty products that enhance your natural glow
                </p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Shop Beauty
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            © 2012 - 2025 Scrole, Scrole Fashion, LLC.
          </div>
        </div>
      </footer>
    </div>
  );
}
