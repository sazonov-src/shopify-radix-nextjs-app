"use client";
import { ProductPrice as Price, useProduct } from "@shopify/hydrogen-react";

export default function ProductPrice() {
  const { product } = useProduct();

  return product && <Price data={product} />;
}
