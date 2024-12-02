import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import ImageBox from "./ImageBox";
import Link from "next/link";

interface ProductMiniCardProps {
  handle: string;
  title: string;
  description: string;
  image?: string;
}

export default function ProductMiniCard({ handle, title, description, image }: ProductMiniCardProps) {

  return (
          <Link
            href={`/product/${handle}`}
          >
    <Card size="1">
      <Flex mb="2">
        <ImageBox image={image} />
      </Flex>

      <Flex align="center" justify="between" gap="3">
        <Flex direction="column"> 
            {title}
          <Text size="2" color="gray" as="p">
            {description}
          </Text>
        </Flex>
        <Box flexShrink="0">
          <Button
            size="2"
            variant="soft"
            color="gray"
          >
            Shop now
          </Button>
        </Box>
      </Flex>
    </Card>
          </Link>
  )
}
