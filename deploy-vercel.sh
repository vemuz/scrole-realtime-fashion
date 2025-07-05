#!/bin/bash

# Scrole Fashion - Vercel Deployment Script
echo "🚀 Deploying Scrole Fashion to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    bun add -g vercel
    export PATH="/home/same/.bun/bin:$PATH"
fi

# Build the application
echo "📦 Building the application..."
bun run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Check if user is logged into Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please log into Vercel:"
    echo "Run: vercel login"
    echo "Then run this script again."
    exit 1
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod --yes

echo "✅ Deployment complete!"
echo "🌟 Your Scrole Fashion platform is now live on Vercel!"
