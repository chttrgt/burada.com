"use client";
import React, { useState } from "react";
import Image from "next/image";
import Counter from "@/components/tools/Counter";
import { Rating } from "@mui/material";
import Button from "@/components/tools/Button";

export type CardProductProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductDetailContainer = ({ product }: { product: any }) => {
  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image,
    inStock: product.inStock,
  });

  const increaseFunc = () => {
    if (cardProduct.quantity == 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseFunc = () => {
    if (cardProduct.quantity == 1) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  return (
    <div className="container mx-auto my-10 block w-full justify-center gap-3 md:flex md:items-center md:gap-10">
      <div className="relative mx-auto h-[300px] w-[300px] md:mx-0 md:h-[400px] md:w-[400px]">
        <Image
          src={product?.image}
          fill
          alt={product?.title}
          objectFit="contain"
        />
      </div>

      <div className="w-full space-y-3 px-5 md:w-1/2 md:px-0">
        <div className="text-xl font-bold md:text-2xl">{product.title}</div>
        <Rating name="read-only" value={product.rating.rate} readOnly />
        <div className="text-slate-500">{product.description}</div>
        <div className="flex items-center gap-2">
          <div>STOK DURUMU:</div>
          {product?.inStock ? (
            <div className="text-green-500">Ürün Stokta Mevcut</div>
          ) : (
            <div className="text-rose-500">Ürün Stokta Bulunmamaktadır.</div>
          )}
        </div>
        <Counter
          cardProduct={cardProduct}
          increaseFunc={increaseFunc}
          decreaseFunc={decreaseFunc}
        />
        <div className="text-lg font-bold text-orange-600 md:text-2xl">
          {product.price} ₺
        </div>
        <Button text="Sepete Ekle" onClick={() => {}} small />
      </div>
    </div>
  );
};

export default ProductDetailContainer;
