"use client";
import { Box, Button, Card, Flex, Link, Text } from "@radix-ui/themes";
import ImageBox from "./ImageBox";

interface ProductMiniCardProps {
  focusable?: boolean;
}

export default function ProductMiniCard({ focusable = true }) {
  const tabIndex = focusable ? undefined : -1;

  return (
    <Card size="1">
      <Flex mb="2">
        <ImageBox />
      </Flex>

      <Flex align="center" justify="between" gap="3">
        <Flex direction="column"> 
          <Link
            href="#"
            underline="hover"
            color="gray"
            size="2"
            weight="bold"
            highContrast
            tabIndex={tabIndex}
            onClick={(e) => e.preventDefault()}
          >
            Back to basics
          </Link>
          <Text size="2" color="gray" as="p">
            Simple and versatile
          </Text>
        </Flex>
        <Box flexShrink="0">
          <Button
            tabIndex={tabIndex}
            size="2"
            variant="soft"
            color="gray"
          >
            Shop now
          </Button>
        </Box>
      </Flex>
    </Card>
  )
}
