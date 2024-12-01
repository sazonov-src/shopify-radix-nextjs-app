import { Box, Button, Card, Flex, Link, Text } from "@radix-ui/themes";
import ImageBox from "./ImageBox";

interface ProductMiniCardProps {
  id?: string;
  title: string;
  description: string;
  image?: string;
}

export default function ProductMiniCard({ title, description, image }: ProductMiniCardProps) {

  return (
    <Card size="1">
      <Flex mb="2">
        <ImageBox image={image} />
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
          >
            {title}
          </Link>
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
  )
}
