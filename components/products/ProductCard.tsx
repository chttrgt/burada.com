import React from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import { textClip } from "@/utils/TextClip";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="w-[240px] cursor-pointer rounded-md p-2 shadow-lg">
      <div className="relative h-[150px]">
        <Image
          src={product.image}
          fill
          alt={product.title}
          className="object-contain"
        />
      </div>
      <div className="mt-2 space-y-1 text-center">
        <div>{textClip(product.title)}</div>
        <Rating name="read-only" value={product.rating.rate} readOnly />
        <div className="text-lg font-bold text-orange-600 md:text-xl">
          {product.price} ₺
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
