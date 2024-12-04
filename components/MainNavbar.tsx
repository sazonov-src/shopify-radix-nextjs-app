"use client";
import React from "react";
import { Button, Flex, Box, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function MainNavbar() {
  return (

    <Box 
      position="sticky" 
      top="0" 
      p="4" 
      className="z-50 bg-white"
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
          <Button variant="ghost" size="2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              height="20"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Cart
          </Button>
        </header>
      </Flex>
    </Box>
  );
}
