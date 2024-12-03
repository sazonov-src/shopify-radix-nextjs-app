"use client";
import { ProductPrice as Price, useProduct } from "@shopify/hydrogen-react";
import { useEffect } from "react";

export default function ProductPrice() {
  const { product, selectedVariant } = useProduct();

  useEffect(() => {}, [selectedVariant]);

  return product && <Price data={product} variantId={selectedVariant?.id} />;
}
