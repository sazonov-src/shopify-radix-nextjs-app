"use client";
import React from "react";
import { useProduct } from "@shopify/hydrogen-react";
import { Flex, Button, Box } from "@radix-ui/themes";

export default function ProductVariants() {
  const { variants, setSelectedVariant, selectedVariant } = useProduct();

  return (
    variants && (
      <Box>
        <Flex gap="2">
          {variants.map(
            (variant) =>
              variant && variant.title !== "Default Title" && (
                <Button
                  variant={
                    variant?.id === selectedVariant?.id ? "solid" : "outline"
                  }
                  onClick={() => { 
                    setSelectedVariant(variant) 
                    console.log("selected variant", variant)
                  }}
                  key={variant.id}
                >
                  {variant.title}
                </Button>
              )
          )}
        </Flex>
      </Box>
    )
  );
}
