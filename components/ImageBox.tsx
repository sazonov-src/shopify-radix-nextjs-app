"use client";
import { AspectRatio } from "@radix-ui/themes";
import Image from "next/image";

interface ImageBoxProps {
  image?: string;
}

export default function ImageBox({image}: ImageBoxProps) {
  const imageLoader = () => {
    return image ?? 'me.png';
  };

  return (
    <AspectRatio ratio={5 / 3}>
      <Image
        fill={true}
        loader={imageLoader}
        src="me.png"
        alt="Picture of the author"
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
    </AspectRatio>
  );
}
