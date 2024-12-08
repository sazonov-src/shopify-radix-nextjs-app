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
  Skeleton,
  IconButton,
} from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useCart } from "@shopify/hydrogen-react";

export default function Cart() {
  const { status, lines, linesUpdate, linesRemove, cost, totalQuantity } =
    useCart();

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Edit profile</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="550px">
        {!totalQuantity && totalQuantity === 0 ? (
          <Box>Cart is empty</Box>
        ) : (
          <>
            <Dialog.Title>Shopping cart</Dialog.Title>

            <Flex direction="column" gap="4" mt="4">
              {lines?.map((item) => (
                <Flex gap="4" align="center" justify="between" key={item?.id}>
                  <Flex flexGrow="1" align="center" gap="2">
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

                  <Box>
                    <Select.Root
                      onValueChange={(value) =>
                        linesUpdate([
                          { id: item?.id!, quantity: Number(value) },
                        ])
                      }
                      defaultValue={item?.quantity?.toString()}
                      size="1"
                    >
                      <Select.Trigger />
                      <Select.Content variant="soft" position="popper">
                        {Array.from({ length: 9 }, (_, i) => (
                          <Select.Item key={i} value={String(i + 1)}>
                            {i + 1}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Root>
                  </Box>

                  <Box width="50px">
                    <Skeleton loading={status === "updating"}>
                      <Text size="2" weight="bold" align="right">
                        {item?.cost?.totalAmount?.amount}
                      </Text>
                    </Skeleton>
                  </Box>

                  <Box>
                    <IconButton
                      size="2"
                      color="gray"
                      variant="soft"
                      onClick={() => linesRemove([item?.id!])}
                    >
                      <Cross2Icon />
                    </IconButton>
                  </Box>
                </Flex>
              ))}
            </Flex>

            <Box>
              <Separator size="4" my="4" />
            </Box>

            <Flex align="center" justify="between" mt="4">
              <Skeleton loading={status === "updating"}>
                <Text size="3">
                  Total: <Strong>{cost?.totalAmount?.amount}</Strong>
                </Text>
              </Skeleton>

              <Button size="2" variant="solid">
                Go to checkout
              </Button>
            </Flex>
          </>
        )}
      </Dialog.Content>
    </Dialog.Root>
  )
}
