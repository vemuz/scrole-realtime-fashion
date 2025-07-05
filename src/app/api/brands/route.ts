import type { BrandData } from "@/data/brands";
import { type NextRequest, NextResponse } from "next/server";

// Import default brands data as source of truth
async function getBrandsData(): Promise<Record<string, BrandData>> {
  try {
    const { BRANDS_DATABASE } = await import("@/data/brands");
    return BRANDS_DATABASE;
  } catch (error) {
    console.error("Error loading brands data:", error);
    return {};
  }
}

// In-memory storage for session-based updates (Netlify compatible)
// Note: This resets on each function cold start - suitable for demos
let sessionBrands: Record<string, BrandData> | null = null;

async function getSessionBrands(): Promise<Record<string, BrandData>> {
  if (!sessionBrands) {
    sessionBrands = await getBrandsData();
  }
  return sessionBrands;
}

// GET - Fetch all brands
export async function GET() {
  try {
    const brands = await getSessionBrands();
    return NextResponse.json({
      success: true,
      brands: Object.values(brands),
      total: Object.keys(brands).length,
    });
  } catch (error) {
    console.error("Error fetching brands:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch brands" },
      { status: 500 },
    );
  }
}

// POST - Create or update brand (session-based for Netlify)
export async function POST(request: NextRequest) {
  try {
    const newBrand: BrandData = await request.json();

    // Validate required fields
    if (!newBrand.id || !newBrand.name || !newBrand.tagline) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields (id, name, tagline)",
        },
        { status: 400 },
      );
    }

    const brands = await getSessionBrands();

    // Update metadata
    const now = new Date().toISOString();
    newBrand.metadata = {
      ...newBrand.metadata,
      updatedAt: now,
      createdAt: newBrand.metadata?.createdAt || now,
    };

    // Add/update brand in session storage
    brands[newBrand.id] = newBrand;

    return NextResponse.json({
      success: true,
      brand: newBrand,
      message: `Brand "${newBrand.name}" saved successfully (session only - changes reset on redeploy)`,
    });
  } catch (error) {
    console.error("Error saving brand:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save brand" },
      { status: 500 },
    );
  }
}

// PUT - Update existing brand (session-based)
export async function PUT(request: NextRequest) {
  try {
    const updatedBrand: BrandData = await request.json();

    if (!updatedBrand.id) {
      return NextResponse.json(
        { success: false, error: "Brand ID is required" },
        { status: 400 },
      );
    }

    const brands = await getSessionBrands();

    if (!brands[updatedBrand.id]) {
      return NextResponse.json(
        { success: false, error: "Brand not found" },
        { status: 404 },
      );
    }

    // Update metadata
    updatedBrand.metadata = {
      ...updatedBrand.metadata,
      updatedAt: new Date().toISOString(),
    };

    brands[updatedBrand.id] = updatedBrand;

    return NextResponse.json({
      success: true,
      brand: updatedBrand,
      message: `Brand "${updatedBrand.name}" updated successfully (session only)`,
    });
  } catch (error) {
    console.error("Error updating brand:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update brand" },
      { status: 500 },
    );
  }
}

// DELETE - Delete brand (session-based)
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const brandId = searchParams.get("id");

    if (!brandId) {
      return NextResponse.json(
        { success: false, error: "Brand ID is required" },
        { status: 400 },
      );
    }

    const brands = await getSessionBrands();

    if (!brands[brandId]) {
      return NextResponse.json(
        { success: false, error: "Brand not found" },
        { status: 404 },
      );
    }

    const deletedBrand = brands[brandId];
    delete brands[brandId];

    return NextResponse.json({
      success: true,
      message: `Brand "${deletedBrand.name}" deleted successfully (session only)`,
    });
  } catch (error) {
    console.error("Error deleting brand:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete brand" },
      { status: 500 },
    );
  }
}
