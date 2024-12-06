"use client";
import { Button } from "@radix-ui/themes";
import { useCart, useProduct } from "@shopify/hydrogen-react";

export default function AddToCartButton() {
  const { linesAdd, status } = useCart();
  const { selectedVariant } = useProduct();

  return (
    selectedVariant?.id && (
      <Button
        size="3"
        loading={status === "updating"}
        variant="solid"
        disabled={!selectedVariant.availableForSale}
        onClick={() => {
          linesAdd([{ merchandiseId: selectedVariant.id! }]);
        }}
      >
        Add to Cart
      </Button>
    )
  );
}
