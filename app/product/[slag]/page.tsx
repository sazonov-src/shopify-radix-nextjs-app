import {
  Grid,
  Separator,
  Heading,
  Select,
  Box,
  Button,
  Card,
  Flex,
  IconButton,
  Link,
  Text,
} from "@radix-ui/themes";
import { Label } from "@radix-ui/react-label";
import { BookmarkIcon } from "@radix-ui/react-icons";
import ImageBox from "@/components/ImageBox";


export default function Product({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  return (
    <Card size="1">
      <Grid gap="2" columns={{initial: "1", xs: "2" }}>
        <Flex mb="2" position="relative">
          <ImageBox />
          <Flex
            align="center"
            justify="center"
            position="absolute"
            bottom="0"
            right="0"
            width="32px"
            height="32px"
            style={{ borderRadius: "var(--radius-3)" }}
            m="2"
          >
            <IconButton
              size="2"
              variant="surface"
            >
                <BookmarkIcon />
            </IconButton>
          </Flex>
        </Flex>

        <Box pl="4">
          <Flex align="end" justify="between" mb="2">
            <Box>
              <Flex mb="1">
                <Link
                  href="#"
                  underline="hover"
                  size="2"
                  highContrast
                >
                  Footwear
                </Link>
              </Flex>

              <Heading as="h3" size="3">
                Sneakers #12
              </Heading>
            </Box>

            <Text size="6" weight="bold">
              $149
            </Text>
          </Flex>

          <Text as="p" size="2" color="gray" mb="4">
            Love at the first sight for enthusiasts seeking a fresh and whimsical
            style.
          </Text>

          <Box>
            <Separator size="4" my="4" />
          </Box>

          <Flex gap="2" align="end">
            <Flex direction="column" flexGrow="1">
              <Label asChild>
                <Text size="1" color="gray" mb="1">
                  Color
                </Text>
              </Label>

              <Select.Root defaultValue="Pastel" size="2">
                <Select.Trigger variant="soft" />
                <Select.Content
                  variant="soft"
                  position="popper"
                >
                  <Select.Item value="Pastel">Pastel</Select.Item>
                  <Select.Item value="Bright">Bright</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>

            <Flex direction="column" minWidth="80px">
              <Label asChild>
                <Text size="1" color="gray" mb="1">
                  Size
                </Text>
              </Label>
              <Select.Root defaultValue="8" size="2">
                <Select.Trigger variant="soft" />
                <Select.Content
                  variant="soft"
                  position="popper"
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <Select.Item key={i} value={String(i++)}>
                      {i++}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Flex>

          </Flex>
          <Flex direction="column" gap="2" mt="4">
            <Button
              size="3"
              variant="solid"
            >
              Buy
            </Button>
          </Flex>
        </Box>
      </Grid>
    </Card>
  );
}
