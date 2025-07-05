import Link from "next/link";

export default function FitnessPage() {
  const fitnessProducts = [
    {
      id: 1,
      title: "PREMIUM ACTIVEWEAR",
      brand: "Lululemon",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9f2e5e78824?w=600&h=400&fit=crop&q=80",
      timeLeft: "Sale ends in 3 days",
      tag: "BESTSELLER",
    },
    {
      id: 2,
      title: "HIGH-PERFORMANCE GEAR",
      brand: "Nike Pro",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80",
      timeLeft: "Sale ends in 5 days",
      tag: "",
    },
    {
      id: 3,
      title: "SUSTAINABLE ACTIVEWEAR",
      brand: "Patagonia",
      image:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=600&h=400&fit=crop&q=80",
      timeLeft: "Sale ends in 4 days",
      tag: "ECO-FRIENDLY",
    },
    {
      id: 4,
      title: "RUNNING ESSENTIALS",
      brand: "Adidas",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop&q=80",
      timeLeft: "Sale ends in 6 days",
      tag: "",
    },
    {
      id: 5,
      title: "YOGA & WELLNESS",
      brand: "Alo Yoga",
      image:
        "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop&q=80",
      timeLeft: "Sale ends in 2 days",
      tag: "MINDFUL",
    },
    {
      id: 6,
      title: "STRENGTH TRAINING",
      brand: "Under Armour",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop&q=80",
      timeLeft: "Sale ends in 7 days",
      tag: "PERFORMANCE",
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
              <Link href="/fitness" className="text-blue-600 font-medium">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">FITNESS</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elevate your performance with premium activewear, sports equipment,
            and wellness essentials designed for every fitness journey.
          </p>
        </div>

        {/* Fitness Categories */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">ACTIVEWEAR</h3>
              <p className="text-sm text-gray-600">Performance Clothing</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">FOOTWEAR</h3>
              <p className="text-sm text-gray-600">Athletic Shoes</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">EQUIPMENT</h3>
              <p className="text-sm text-gray-600">Training Gear</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">WELLNESS</h3>
              <p className="text-sm text-gray-600">Recovery & Health</p>
            </div>
          </div>
        </section>

        {/* Featured Fitness Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 tracking-wide">
            PERFORMANCE ESSENTIALS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {fitnessProducts.map((item) => (
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

        {/* Fitness Banner */}
        <section className="mb-12">
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-600 rounded-lg overflow-hidden h-64">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop&q=80"
              alt="Fitness Lifestyle"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">
                  ELEVATE YOUR PERFORMANCE
                </h2>
                <p className="text-lg mb-6">
                  Premium gear for every workout, every goal, every victory
                </p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Shop Fitness
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
