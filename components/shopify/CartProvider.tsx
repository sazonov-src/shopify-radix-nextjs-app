"use client";
import {CartProvider as Provider} from '@shopify/hydrogen-react';

export default function CartProvider({children}: any) {
  return (
  <Provider
    onLineAdd={() => {
      console.log('a line is being added');
    }}
    onLineAddComplete={() => {
      console.log('a line has been added');
    }}
  >
    {children}
  </Provider>
  )
}
