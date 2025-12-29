"use client";

import { Plus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const categories = ["Breakfast", "Lunch", "Dinner", "Snacks"];

export default function Categories() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "";

  const [category, setCategory] = useState(selectedCategory);

  // Update URL search param on category change
  const handleCategoryClick = (cat: string) => {
    setCategory(cat);
    const params = new URLSearchParams(window.location.search);
    params.set("category", cat);
    router.replace(`?${params.toString()}`);
  };

  // Sync state when URL changes externally
  useEffect(() => {
    if (selectedCategory !== category) {
      setCategory(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div className="flex items-center gap-2 mb-4">
      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => handleCategoryClick(cat)}
          className={`py-2 px-4 rounded-full cursor-pointer font-medium ${
            cat === category
              ? "bg-cyan-500  text-white"
              : "bg-[#0A3F5E] text-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}

      <button className="ml-auto flex items-center gap-1 bg-cyan-500 text-white text-md px-3 py-2 rounded-full">
        <Plus size={14} /> Add New Item
      </button>
    </div>
  );
}
