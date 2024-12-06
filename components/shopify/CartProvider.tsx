"use client";
import { Button } from "@radix-ui/themes";
import {
  CartProvider as Provider,
  ShopifyProvider,
} from "@shopify/hydrogen-react";

export default function CartProvider({ children }: any) {
  return (
    <ShopifyProvider
      storefrontToken="23e001b5c6b49349de47ae7985a3112e"
      storeDomain="food-app-store.myshopify.com"
      storefrontApiVersion="2024-10"
      countryIsoCode="CA"
      languageIsoCode="EN"
    >
      <Provider
        onLineAdd={() => {
          console.log("a line is being added");
        }}
        onLineAddComplete={() => {
          console.log("a line has been added");
        }}
      >
        {children}
      </Provider>
    </ShopifyProvider>
  );
}
