# Netlify Deployment Guide

## Overview
This Next.js 15 application is configured for dynamic deployment on Netlify with serverless functions.

## Configuration Files

### netlify.toml
```toml
[build]
  command = "bun run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18.17.0"
  BUN_VERSION = "1.0.0"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[images]
  remote_images = [
    "https://source.unsplash.com/.*",
    "https://images.unsplash.com/.*",
    "https://ext.same-assets.com/.*",
    "https://ugc.same-assets.com/.*",
    "https://www.bebe.com/.*",
    "https://cdn.allbirds.com/.*",
    "https://allbirds.com/.*",
    "https://allbirds.ca/.*",
    "https://cdn.shopify.com/.*",
    "https://cultgaia.com/.*",
    "https://via.placeholder.com/.*"
  ]

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[functions]
  node_bundler = "esbuild"
```

## Key Changes Made

### 1. API Routes Modified for Serverless
- **Before**: File system writes to `data/brands.json` and backups
- **After**: Session-based in-memory storage (resets on cold starts)
- Suitable for demo purposes, can be extended with database integration

### 2. Next.js 15 Compatibility
- Updated `params` interfaces to use `Promise<>` for async params
- Fixed TypeScript errors related to page props

### 3. Build Configuration
- Uses Bun for package management and building
- Configured for dynamic rendering with serverless functions
- Image optimization configured for external domains

## Deployment Steps

1. **Connect Repository to Netlify**
   - Push code to Git repository
   - Connect repository to Netlify

2. **Build Settings** (Auto-configured via netlify.toml)
   - Build command: `bun run build`
   - Publish directory: `.next`
   - Node.js version: 18.17.0

3. **Environment Variables** (Optional)
   - `NODE_ENV=production`
   - `NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app`

## Features

### Static Pages
- Home page (`/`)
- Category pages (`/fashion`, `/watches`, `/fitness`, `/beauty`)
- Admin interface (`/admin`)

### Dynamic Pages
- Brand pages (`/brand/[brandName]`)
- Product pages (`/product/[brandName]/[productId]`)

### API Routes (Serverless Functions)
- `GET /api/brands` - List all brands
- `POST /api/brands` - Create brand (session only)
- `PUT /api/brands` - Update brand (session only)
- `DELETE /api/brands?id=brandId` - Delete brand (session only)
- `GET /api/brands/[brandId]` - Get specific brand
- `PUT /api/brands/[brandId]` - Update specific brand (session only)
- `DELETE /api/brands/[brandId]` - Delete specific brand (session only)

## Important Notes

### Session-based Storage
- API changes are stored in memory only
- Changes reset on function cold starts (approximately every 15 minutes of inactivity)
- For persistent data, integrate with a database service

### Image Optimization
- External images are configured in `next.config.js`
- Netlify will optimize images from allowed domains

### Performance
- Static pages are pre-generated
- Dynamic pages use server-side rendering
- API routes run as serverless functions

## Troubleshooting

### Build Errors
- Ensure Node.js 18+ is being used
- Check that all dependencies are installed with `bun install`
- Verify TypeScript compilation with `bunx tsc --noEmit`

### Runtime Errors
- Check Netlify function logs for API route errors
- Verify image domains are configured in `next.config.js`
- Ensure dynamic route parameters are properly handled

### Performance Issues
- Monitor function cold starts
- Consider implementing database for persistent storage
- Optimize images and reduce bundle size if needed

## Future Improvements

1. **Database Integration**
   - Add PostgreSQL/MongoDB for persistent brand data
   - Implement proper data validation and relationships

2. **Authentication**
   - Add admin authentication for brand management
   - Implement user accounts for personalized experiences

3. **SEO & Analytics**
   - Add structured data for products
   - Implement Google Analytics or similar

4. **Performance**
   - Add caching strategies
   - Implement incremental static regeneration (ISR)
   - Optimize bundle size and images
