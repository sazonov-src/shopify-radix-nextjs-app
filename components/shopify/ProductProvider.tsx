"use client";
import { ProductProvider as Provider } from "@shopify/hydrogen-react";
import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import React from "react";

interface Props {
  data: Product
  children: React.ReactNode
}

export default function ProductProvider({ children, data}: Props) {
  return <Provider data={data}>{children}</Provider>;
}
