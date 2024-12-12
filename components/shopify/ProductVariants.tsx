"use client";
import React from "react";
import { useProduct } from "@shopify/hydrogen-react";
import { Flex, RadioCards, Text, Box } from "@radix-ui/themes";
import { useEffect } from "react";

export default function ProductVariants() {
  const { options, variants, setSelectedVariant, selectedVariant } = useProduct();

  useEffect(() => {
    console.log(options)
  }, []);

  return (
    variants && (
      <Box>
        <RadioCards.Root
          defaultValue={selectedVariant?.id}
          columns={{ initial: "1", sm: "3" }}
        >
          {variants.map(
            (variant) =>
              variant &&
              variant.id &&
              variant.title !== "Default Title" && (
                <RadioCards.Item
                  onClick={() => setSelectedVariant(variant)}
                  key={variant.id}
                  value={variant.id}
                >
                  <Flex direction="column" width="100%">
                    { variant?.selectedOptions && 
                      variant.selectedOptions.map((option) => (
                      <Text size="1" key={option?.name}>
                        {option?.name}
                      </Text>
                    ))}
                    <Text weight="bold">{variant.title}</Text>
                  </Flex>
                </RadioCards.Item>
              )
          )}
        </RadioCards.Root>
      </Box>
    )
  );
}
