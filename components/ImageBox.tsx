"use client";
import { AspectRatio } from "@radix-ui/themes";
import Image from "next/image";

export default function ImageBox() {
  const imageLoader = () => {
    return "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=424&q=80";
  };
  return (
    <AspectRatio ratio={5 / 3}>
      <Image
        fill={true}
        loader={imageLoader}
        src="me.png"
        alt="Picture of the author"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </AspectRatio>
  );
}
