"use client";
import { useCart } from "@shopify/hydrogen-react";

export default function Cart() {
  const { status, lines, note } = useCart();
  return (
    <div>
      <h1>Cart {status}</h1>
      <p>Note: {note}</p>
      {lines?.map((line) => (
       <p>{line?.merchandise?.title}</p>
      ))}
    </div>
  );
}
