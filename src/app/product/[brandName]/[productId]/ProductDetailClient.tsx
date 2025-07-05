"use client";

import Link from "next/link";
import { useState } from "react";

interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

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
  images?: ProductImage[];
}

function ProductImageGallery({
  images,
  selectedImageIndex,
  setSelectedImageIndex,
}: {
  images: ProductImage[];
  selectedImageIndex: number;
  setSelectedImageIndex: (index: number) => void;
}) {
  return (
    <div className="flex gap-4">
      {/* Thumbnail Gallery */}
      <div className="flex flex-col gap-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImageIndex(index)}
            className={`w-16 h-20 border-2 rounded overflow-hidden ${
              selectedImageIndex === index ? "border-black" : "border-gray-200"
            } hover:border-gray-400 transition-colors`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-[3/5] bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={images[selectedImageIndex]?.url || images[0]?.url}
          alt={images[selectedImageIndex]?.alt || images[0]?.alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default function ProductDetailClient({
  product,
  brandName,
}: {
  product: BrandProduct;
  brandName: string;
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("XS");

  return (
    <div className="min-h-screen bg-white">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav
          className="flex items-center text-sm text-gray-600"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-1">
            <li>
              <Link
                href="/"
                className="hover:text-gray-900 hover:underline transition-colors"
              >
                HOME
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link
                href="/"
                className="hover:text-gray-900 hover:underline transition-colors"
              >
                FASHION
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link
                href={`/brand/${brandName}`}
                className="hover:text-gray-900 hover:underline transition-colors uppercase"
              >
                {brandName}
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900 font-medium uppercase">
                {product.title} - {product.model}
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <ProductImageGallery
              images={
                product.images || [
                  { id: 1, url: product.image, alt: product.title },
                ]
              }
              selectedImageIndex={selectedImageIndex}
              setSelectedImageIndex={setSelectedImageIndex}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {product.tag && (
              <div className="inline-block bg-black text-white px-3 py-1 text-sm font-bold rounded">
                {product.tag}
              </div>
            )}

            <h1 className="text-3xl font-bold text-gray-900 uppercase">
              {product.title}
            </h1>

            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-gray-900">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={`star-${i}`}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">0 Reviews</span>
            </div>

            <p className="text-red-600 text-sm font-medium">
              LIMITED TIME MARKDOWN
            </p>

            {/* Color Selection - Show current color only */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                COLOR: {product.model.toUpperCase()}
              </h3>
              <p className="text-sm text-gray-600">
                This product is available in {product.model}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-900">
                  SIZE: {selectedSize}
                </h3>
                <button className="text-sm text-gray-600 underline">
                  SIZE CHART
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border py-2 px-3 text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-black text-white py-3 px-6 font-medium hover:bg-gray-800 transition-colors">
                ADD TO CART
              </button>
              <button className="w-full border border-gray-300 py-3 px-6 font-medium hover:border-gray-400 transition-colors">
                ADD TO WISHLIST
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                DETAILS
              </h3>
              <p className="text-sm text-gray-600">
                Dreamy fabric meets a cascade of color. This versatile piece
                features an elegant cowl neckline, paired with the subtle
                romance of an ombre chiffon. Perfect for special occasions or a
                sophisticated evening out.
              </p>
              <div className="mt-3 text-sm text-gray-600">
                <p>• Ombre Chiffon Construction</p>
                <p>• Cowl Front Neckline</p>
                <p>• Adjustable Straps</p>
                <p>• Lined for Comfort</p>
                <p>• 100% Polyester</p>
                <p>• Hand Wash Cold</p>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="border-t pt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                SHIPPING & RETURNS
              </h3>
              <p className="text-sm text-gray-600">
                Free ground shipping on U.S. orders $150+. Returns accepted
                within 30 days.
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            OVERALL RATING
          </h2>
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-4xl font-bold">0.0</span>
            <div className="flex text-gray-300">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={`review-star-${i}`}
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">0 Reviews</span>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">No Reviews Yet</h3>
            <p className="text-gray-600">
              Be the first to review this product!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
