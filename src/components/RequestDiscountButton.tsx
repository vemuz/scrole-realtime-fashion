"use client";

interface RequestDiscountButtonProps {
  brandName: string;
}

export default function RequestDiscountButton({
  brandName,
}: RequestDiscountButtonProps) {
  const handleRequestDiscount = () => {
    // Placeholder for future functionality
    alert(`Discount codes coming soon for ${brandName}!`);
  };

  return (
    <button
      onClick={handleRequestDiscount}
      className="w-full border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors text-center block"
    >
      Get Discount Code
    </button>
  );
}
