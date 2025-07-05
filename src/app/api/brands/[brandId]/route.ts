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
let sessionBrands: Record<string, BrandData> | null = null;

async function getSessionBrands(): Promise<Record<string, BrandData>> {
  if (!sessionBrands) {
    sessionBrands = await getBrandsData();
  }
  return sessionBrands;
}

interface RouteParams {
  params: Promise<{
    brandId: string;
  }>;
}

// GET - Fetch specific brand by ID
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { brandId } = await params;
    const brands = await getSessionBrands();

    const brand = brands[brandId];

    if (!brand) {
      return NextResponse.json(
        { success: false, error: "Brand not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      brand: brand,
    });
  } catch (error) {
    console.error("Error fetching brand:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch brand" },
      { status: 500 },
    );
  }
}

// PUT - Update specific brand
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { brandId } = await params;
    const updatedBrand: Partial<BrandData> = await request.json();
    const brands = await getSessionBrands();

    const existingBrand = brands[brandId];

    if (!existingBrand) {
      return NextResponse.json(
        { success: false, error: "Brand not found" },
        { status: 404 },
      );
    }

    // Merge the updates with existing brand data
    const brand: BrandData = {
      ...existingBrand,
      ...updatedBrand,
      id: brandId, // Ensure ID cannot be changed
      metadata: {
        ...existingBrand.metadata,
        ...updatedBrand.metadata,
        updatedAt: new Date().toISOString(),
      },
    };

    brands[brandId] = brand;

    return NextResponse.json({
      success: true,
      brand: brand,
      message: `Brand "${brand.name}" updated successfully (session only)`,
    });
  } catch (error) {
    console.error("Error updating brand:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update brand" },
      { status: 500 },
    );
  }
}

// DELETE - Delete specific brand
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { brandId } = await params;
    const brands = await getSessionBrands();

    const brand = brands[brandId];

    if (!brand) {
      return NextResponse.json(
        { success: false, error: "Brand not found" },
        { status: 404 },
      );
    }

    delete brands[brandId];

    return NextResponse.json({
      success: true,
      message: `Brand "${brand.name}" deleted successfully (session only)`,
    });
  } catch (error) {
    console.error("Error deleting brand:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete brand" },
      { status: 500 },
    );
  }
}
