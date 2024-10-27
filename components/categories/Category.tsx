import React from "react";
import categories from "@/mock/categories.json";

export default function Category() {
  return (
    <div className="flex items-center justify-center gap-3 overflow-x-auto px-3 py-5 md:gap-10 md:px-10 md:py-8">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex min-w-[120px] flex-1 cursor-pointer items-center justify-center rounded-full border px-4 py-2 text-slate-500"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}
