"use client";
import React from "react";
import { Flex, Box, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import CartPictogram from "./shopify/CartPictogram";
import Cart from "./shopify/Cart";

export default function MainNavbar() {
  return (

    <Box 
      position="sticky" 
      top="0" 
      p="4" 
      className="z-10 bg-white"
    >
      <Flex asChild align="center" justify="between">
        <header>
          {/* Logo */}
          <Box asChild>
            <a href="/">Logo</a>
          </Box>

          {/* Search Bar */}
          <Flex asChild align="center" gap="2">
            <TextField.Root variant="soft" placeholder="Search the docs…">
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          </Flex>

          {/* Cart Button */}
          <Cart />
        </header>
      </Flex>
    </Box>
  );
}
