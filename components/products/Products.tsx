import React from "react";
import Heading from "../tools/Heading";
import products from "@/mock/products.json";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <div>
      <Heading text="Tüm Ürünler" center={true} />
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
