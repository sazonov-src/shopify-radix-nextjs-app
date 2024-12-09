"use client";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Box,
  Flex,
  Link,
  Text,
  Select,
  Separator,
  Badge,
  Strong,
  Button,
  Skeleton,
  IconButton,
} from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";
import { CartCheckoutButton, useCart } from "@shopify/hydrogen-react";

export default function Cart() {
  const { status, lines, linesUpdate, linesRemove, cost, totalQuantity } =
    useCart();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="ghost" size="3" className="relative pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="18"
            height="18"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {totalQuantity !== 0 && (
            <Badge
              variant="solid"
              size="1"
              color="crimson"
              radius="full"
              className="absolute top-2 right-2"
            >
              <Text size="1" weight="bold" >
                {totalQuantity}
              </Text>
            </Badge>
          )}
          Cart
        </Button>
      </Dialog.Trigger>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow z-20" />

      <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow z-50">
        <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
          Your cart
        </Dialog.Title>
        {!totalQuantity && totalQuantity === 0 ? (
          <Box>Cart is empty</Box>
        ) : (
          <>
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
                      size="1"
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

              <CartCheckoutButton>
                <Button size="2" variant="solid">
                  Go to checkout
                </Button>
              </CartCheckoutButton>
            </Flex>
          </>
        )}
      </Dialog.Content>
    </Dialog.Root>
  );
}
