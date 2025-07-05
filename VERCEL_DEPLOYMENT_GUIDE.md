# Scrole Fashion - Vercel Deployment Guide

## 🚀 Deploy to Vercel

Your Scrole Fashion e-commerce platform is ready for production deployment on Vercel. This guide provides multiple deployment methods.

## ✅ Pre-deployment Checklist

- [x] Next.js 15 build is working (`bun run build` succeeds)
- [x] All API routes are functional
- [x] Shopify integration is working
- [x] All 9 premium brands are configured
- [x] Mobile-responsive design is tested
- [x] Vercel configuration is optimized

## Method 1: GitHub Integration (Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "New Project"
4. Import your repository
5. Configure the project:
   - **Framework Preset**: Next.js
   - **Build Command**: `bun run build`
   - **Install Command**: `bun install`
   - **Root Directory**: `./`

### Step 3: Deploy
Vercel will automatically build and deploy your app. You'll get a live URL like:
`https://scrole-fashion-[random].vercel.app`

## Method 2: Vercel CLI

### Step 1: Install Vercel CLI
```bash
bun add -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# Make the script executable
chmod +x deploy-vercel.sh

# Run the deployment script
./deploy-vercel.sh
```

Or manually:
```bash
vercel --prod
```

## Method 3: Direct Upload

1. Build the project locally:
```bash
bun run build
```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag and drop the entire project folder
4. Vercel will detect it's a Next.js app and deploy it

## 🔧 Configuration

### vercel.json
The project includes an optimized `vercel.json` configuration:
- Uses Bun for faster builds
- Configured API route timeouts
- CORS headers for API endpoints
- Proper redirects for sitemap

### Environment Variables
If needed, add these in Vercel dashboard → Settings → Environment Variables:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`

## 🧪 Testing Your Deployment

Once deployed, test these features:

### Core Pages
- [ ] Homepage with trending brands
- [ ] Category pages (/fashion, /watches, /fitness, /beauty)
- [ ] Brand pages (/brand/[brandName])
- [ ] Product detail pages
- [ ] Admin interface (/admin)

### API Endpoints
- [ ] `GET /api/brands` - Returns all brands
- [ ] `GET /api/brands/[brandId]` - Returns specific brand
- [ ] Brand data updates in admin panel

### Shopify Integration
- [ ] Live product fetching from 9 premium brands
- [ ] Product images loading correctly
- [ ] Pricing and inventory data
- [ ] Product variants and options

## 🎯 Expected Performance

Your deployed app should achieve:
- **First Load**: ~105KB JavaScript
- **Build Time**: ~2-3 minutes
- **Cold Start**: <1 second
- **Page Load**: <2 seconds

## 🌟 Premium Brands Integrated

Your live platform will showcase:
1. **Bebe** - Women's Fashion
2. **Daniel Wellington** - Luxury Watches
3. **Triwa** - Modern Timepieces
4. **Undone** - Custom Watches
5. **Steve Madden** - Fashion Footwear
6. **Oh Polly** - Contemporary Fashion
7. **New Era** - Sports Headwear
8. **Frankie's Bikinis** - Swimwear
9. **Unique Vintage** - Retro Fashion

## 🔗 Post-Deployment

### Custom Domain (Optional)
1. Go to Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Analytics
Vercel provides built-in analytics for:
- Page views and performance
- Core Web Vitals
- Function execution metrics

## 🚨 Troubleshooting

### Build Errors
- Check `bun run build` works locally
- Verify all dependencies in package.json
- Check TypeScript/ESLint errors

### API Issues
- Verify API routes are in `src/app/api/`
- Check Shopify domain accessibility
- Monitor function timeouts in Vercel dashboard

### Performance Issues
- Check image optimization settings
- Monitor Core Web Vitals
- Use Vercel Analytics for insights

## 📞 Support

If you encounter any issues:
1. Check Vercel deployment logs
2. Test locally with `bun run build`
3. Verify all API endpoints are working
4. Check browser console for errors

Your Scrole Fashion platform is now ready for production traffic! 🎉
