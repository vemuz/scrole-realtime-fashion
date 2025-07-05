"use client";

import { type BrandData, CategoryAssignment } from "@/data/brands";
import Link from "next/link";
import { useEffect, useState } from "react";

// Helper function to generate brand ID from name
function generateBrandId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s\-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function AdminPage() {
  // State management
  const [brands, setBrands] = useState<BrandData[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingBrand, setEditingBrand] = useState<BrandData | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Load brands from API on component mount
  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/brands");
      const data = await response.json();

      if (data.success) {
        setBrands(data.brands);
      } else {
        setError(data.error || "Failed to load brands");
      }
    } catch (err) {
      console.error("Error loading brands:", err);
      setError("Failed to load brands");
    } finally {
      setLoading(false);
    }
  };

  // Form state for new brand
  const [newBrand, setNewBrand] = useState({
    name: "",
    tagline: "",
    story: "",
    heroImage: "",
    website: "",
    founded: "",
    location: "",
    priceRange: "mid" as "budget" | "mid" | "luxury" | "ultra-luxury",
    categories: [] as string[],
    trending: {
      promoted: false,
      promotionType: "new" as
        | "paid"
        | "featured"
        | "new"
        | "sale"
        | "exclusive",
      priority: 10,
      campaignEndDate: "",
      active: false,
    },
    initialProducts: [] as Array<{
      title: string;
      model: string;
      price: string;
      originalPrice: string;
      imageUrl: string;
      tag: string;
      externalUrl: string;
    }>,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = ["fashion", "watches", "fitness", "beauty"] as const;
  const promotionTypes = [
    "paid",
    "featured",
    "new",
    "sale",
    "exclusive",
  ] as const;
  const priceRanges = ["budget", "mid", "luxury", "ultra-luxury"] as const;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!newBrand.name.trim()) newErrors.name = "Brand name is required";
    if (!newBrand.tagline.trim()) newErrors.tagline = "Tagline is required";
    if (!newBrand.story.trim()) newErrors.story = "Brand story is required";
    if (!newBrand.heroImage.trim())
      newErrors.heroImage = "Hero image URL is required";
    if (newBrand.categories.length === 0)
      newErrors.categories = "At least one category is required";

    // Validate URL format
    if (
      newBrand.heroImage &&
      !newBrand.heroImage.match(/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i)
    ) {
      newErrors.heroImage = "Please enter a valid image URL";
    }

    if (newBrand.website && !newBrand.website.match(/^https?:\/\/.+/)) {
      newErrors.website = "Please enter a valid website URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
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
              <span className="text-gray-500">/ Admin</span>
            </div>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              ← Back to Site
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Brand Management
          </h1>
          <p className="text-gray-600">
            Manage brand categories and trending placement with persistent
            storage
          </p>

          {/* Error Display */}
          {error && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              <p className="font-medium">Error:</p>
              <p>{error}</p>
              <button
                onClick={() => setError(null)}
                className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="mt-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-md">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600" />
                <span>Loading brands from persistent storage...</span>
              </div>
            </div>
          )}

          {/* Saving State */}
          {saving && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600" />
                <span>Saving to persistent storage...</span>
              </div>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-gray-900">
              {brands.length}
            </div>
            <div className="text-sm text-gray-600">Total Brands</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-green-600">
              {brands.filter((b) => b.active).length}
            </div>
            <div className="text-sm text-gray-600">Active Brands</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-blue-600">
              {
                brands.filter((b) => b.trending.promoted && b.trending.active)
                  .length
              }
            </div>
            <div className="text-sm text-gray-600">On Trending</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-purple-600">
              {
                brands.filter(
                  (b) =>
                    b.trending.promotionType === "paid" && b.trending.active,
                ).length
              }
            </div>
            <div className="text-sm text-gray-600">Paid Promotions</div>
          </div>
        </div>

        {/* Test Persistent Storage */}
        <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="text-lg font-medium text-yellow-800 mb-2">
            🧪 Test Persistent Storage
          </h3>
          <p className="text-yellow-700 mb-4">
            Test the data persistence by creating, modifying, or deleting
            brands. All changes are saved permanently!
          </p>

          <div className="flex space-x-3">
            <button
              onClick={async () => {
                try {
                  setSaving(true);
                  const testBrand = {
                    id: `test-brand-${Date.now()}`,
                    name: `Test Brand ${new Date().getHours()}:${new Date().getMinutes()}`,
                    tagline: "Testing Persistent Storage",
                    story:
                      "This is a test brand to verify data persistence is working correctly.",
                    heroImage:
                      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop&q=80",
                    categories: [
                      {
                        category: "fashion" as const,
                        featured: true,
                        priority: 1,
                        active: true,
                      },
                    ],
                    trending: {
                      promoted: false,
                      promotionType: "new" as const,
                      priority: 10,
                      active: false,
                    },
                    active: true,
                    products: [],
                    metadata: {
                      createdAt: new Date().toISOString(),
                      updatedAt: new Date().toISOString(),
                      totalProducts: 0,
                      averagePrice: 0,
                    },
                  };

                  const response = await fetch("/api/brands", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(testBrand),
                  });

                  const result = await response.json();
                  if (result.success) {
                    await loadBrands();
                    alert(
                      "✅ SUCCESS! Test brand created and saved to persistent storage!",
                    );
                  } else {
                    alert(`❌ ERROR: ${result.error}`);
                  }
                } catch (err) {
                  alert("❌ ERROR: Failed to test persistence");
                } finally {
                  setSaving(false);
                }
              }}
              disabled={saving}
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 disabled:opacity-50"
            >
              Create Test Brand
            </button>

            <button
              onClick={() => {
                loadBrands();
                alert("🔄 Reloaded brands from persistent storage!");
              }}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              Reload from Storage
            </button>
          </div>
        </div>

        {/* Brand List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Persistent Brand Database
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {brands.map((brand) => (
              <div key={brand.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {brand.name}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          brand.active
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {brand.active ? "Active" : "Inactive"}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          brand.trending.promoted && brand.trending.active
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {brand.trending.promoted && brand.trending.active
                          ? "On Trending"
                          : "Not Trending"}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{brand.tagline}</p>

                    {/* Categories */}
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-900 mr-2">
                        Categories:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {categories.map((category) => {
                          const isSelected = brand.categories.some(
                            (c) => c.category === category,
                          );
                          return (
                            <span
                              key={category}
                              className={`px-3 py-1 text-xs rounded-full capitalize ${
                                isSelected
                                  ? "bg-blue-100 text-blue-800 border border-blue-300"
                                  : "bg-gray-100 text-gray-600 border border-gray-300"
                              }`}
                            >
                              {category}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">
                          Products:
                        </span>
                        <p className="text-gray-600">
                          {brand.metadata.totalProducts}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">
                          Created:
                        </span>
                        <p className="text-gray-600">
                          {new Date(
                            brand.metadata.createdAt,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">
                          Updated:
                        </span>
                        <p className="text-gray-600">
                          {new Date(
                            brand.metadata.updatedAt,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col space-y-2 ml-6">
                    <button
                      onClick={async () => {
                        try {
                          setSaving(true);
                          const response = await fetch(
                            `/api/brands/${brand.id}`,
                            {
                              method: "DELETE",
                            },
                          );
                          const result = await response.json();
                          if (result.success) {
                            await loadBrands();
                            alert(
                              `✅ "${brand.name}" deleted from persistent storage!`,
                            );
                          } else {
                            alert(`❌ ERROR: ${result.error}`);
                          }
                        } catch (err) {
                          alert("❌ ERROR: Failed to delete brand");
                        } finally {
                          setSaving(false);
                        }
                      }}
                      disabled={saving}
                      className="px-3 py-1 text-xs rounded bg-red-100 text-red-700 hover:bg-red-200 disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
