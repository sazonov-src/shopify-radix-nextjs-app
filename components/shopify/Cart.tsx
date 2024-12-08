"use client";
import {
  Box,
  Dialog,
  Flex,
  Link,
  Text,
  Select,
  Separator,
  Strong,
  Button,
} from "@radix-ui/themes";
import { useCart } from "@shopify/hydrogen-react";

export default function Cart() {
  const { status, lines, note } = useCart();
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Edit profile</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="550px">
        <Dialog.Title>Shopping cart</Dialog.Title>
        
          <Flex direction="column" gap="4" mt="4">
            {lines?.map((item) => (
              <Flex gap="4" align="center" justify="between" key={item?.id}>
                <Flex flexGrow="1" align="center" gap="2" >
                  <img
                    src={item?.merchandise?.image?.url}
                    style={{ borderRadius: "var(--radius-1)" }}
                    width="64"
                    height="64"
                  />
                  <Box>
                    <Text as="div" color="gray" trim="start">
                      <Link
                        href="#"
                        underline="hover"
                        size="2"
                        weight="bold"
                        onClick={(e) => e.preventDefault()}
                      >
                        {item?.merchandise?.product?.title}
                      </Link>
                    </Text>
                    <Text as="div" color="gray" size="1" trim="end">
                      {item?.merchandise?.title}
                    </Text>
                  </Box>
                </Flex>

                <Flex direction="column" >
                  <Select.Root defaultValue={item?.quantity?.toString()} size="1">
                    <Select.Trigger />
                    <Select.Content variant="soft" position="popper">
                      {Array.from({ length: 9 }, (_, i) => (
                        <Select.Item key={i} value={String(i + 1)}>
                          {i + 1}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </Flex>

                <Flex direction="column" >
                  <Text size="2" weight="bold" align="right">
                    {item?.cost?.totalAmount?.amount}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>

          <Box>
            <Separator size="4" my="4" />
          </Box>

          <Flex align="center" justify="between" mt="4">
            <Text size="2">
              Total <Strong>$313</Strong>
            </Text>

            <Button size="2" variant="solid" >
              Go to checkout
            </Button>
          </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
