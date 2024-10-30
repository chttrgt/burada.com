import React from "react";
import ProductDetailContainer from "@/container/product/ProductDetailContainer";
import products from "@/mock/products.json";

type ProductDetailProps = {
  productId?: string;
};

const ProductDetail = async ({ params }: { params: ProductDetailProps }) => {
  const { productId } = await params;
  const product = products.find((p) => p.id.toString() === productId);

  return <ProductDetailContainer product={product} />;
};

export default ProductDetail;
