/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bebe.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.danielwellington.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "triwa.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "undone.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.stevemadden.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ohpolly.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.neweracap.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "frankiesbikinis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unique-vintage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      }
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'],
    } : false,
  },
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
