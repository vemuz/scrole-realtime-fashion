#!/bin/bash

echo "🔍 Netlify Deployment Verification Script"
echo "========================================"

# Check required files
echo "📁 Checking required files..."
REQUIRED_FILES=("netlify.toml" "next.config.js" "package.json" ".nvmrc")
for file in "${REQUIRED_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file exists"
  else
    echo "❌ $file missing"
    exit 1
  fi
done

# Check Node/Bun versions
echo ""
echo "🔧 Checking versions..."
echo "Node: $(node --version)"
echo "Bun: $(bun --version)"

# Check Next.js configuration
echo ""
echo "🔍 Checking Next.js configuration..."
if grep -q "output.*standalone" next.config.js; then
  echo "❌ ERROR: 'output: standalone' found in next.config.js - this is incompatible with Netlify!"
  exit 1
else
  echo "✅ Next.js configuration is compatible with Netlify"
fi

# Test dependencies installation
echo ""
echo "📦 Installing dependencies..."
if bun install; then
  echo "✅ Dependencies installed successfully"
else
  echo "❌ Failed to install dependencies"
  exit 1
fi

# Clean build test
echo ""
echo "🧹 Cleaning previous build..."
rm -rf .next

echo ""
echo "🏗️  Running production build..."
if bun run build; then
  echo "✅ Build completed successfully"
else
  echo "❌ Build failed"
  exit 1
fi

# Check build output
echo ""
echo "📂 Checking build output..."
if [ -d ".next" ]; then
  echo "✅ .next directory created"

  # Check for essential files
  ESSENTIAL_FILES=(".next/BUILD_ID" ".next/app-build-manifest.json" ".next/static")
  for file in "${ESSENTIAL_FILES[@]}"; do
    if [ -e "$file" ]; then
      echo "✅ $file exists"
    else
      echo "❌ $file missing from build output"
      exit 1
    fi
  done
else
  echo "❌ .next directory not created"
  exit 1
fi

# Check netlify.toml configuration
echo ""
echo "⚙️  Checking Netlify configuration..."
if grep -q 'publish = ".next"' netlify.toml; then
  echo "✅ Correct publish directory configured"
else
  echo "❌ Incorrect publish directory in netlify.toml"
  exit 1
fi

if grep -q 'command = "bun run build"' netlify.toml; then
  echo "✅ Correct build command configured"
else
  echo "❌ Incorrect build command in netlify.toml"
  exit 1
fi

echo ""
echo "🎉 SUCCESS! Deployment is ready for Netlify"
echo ""
echo "📋 Summary:"
echo "  • Node.js version: $(cat .nvmrc)"
echo "  • Build command: bun run build"
echo "  • Publish directory: .next"
echo "  • Next.js mode: Standard (not standalone)"
echo "  • Image optimization: Configured for external domains"
echo ""
echo "🚀 To deploy:"
echo "  1. Push changes to your Git repository"
echo "  2. Connect repository to Netlify"
echo "  3. Netlify will auto-detect settings from netlify.toml"
echo "  4. Deploy!"
