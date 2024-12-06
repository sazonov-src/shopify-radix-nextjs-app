import {
  Grid,
  Separator,
  Heading,
  Box,
  Button,
  Card,
  Flex,
  IconButton,
  Link,
  Text,
} from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";
import ImageBox from "@/components/ImageBox";
import { client } from "@/shopify-client";
import ProductPrice from "@/components/shopify/ProductPrice";
import ProductProvider from "@/components/shopify/ProductProvider";
import ProductVariants from "@/components/shopify/ProductVariants";
import AddToCartButton from "@/components/shopify/AddToCartButton";

const GRAPHQL_QUERY = `#graphql
  query getProductById($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
    variants(first: 10) {
      edges {
        node {
          id
          title
          sku
          availableForSale
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
      collections(first: 10) {
        edges {
          node {
            title
            handle
          }
        }
      }
      featuredImage {
        altText
        height
        id
        url(transform: { maxWidth: 800 }) # Example transform option
      }
    }
  }
`;

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const response = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
      variables: { handle: (await params).slug },
    }),
    headers: client.getPublicTokenHeaders(),
    method: "POST",
  });

  const product: any = (await response.json()).data.product;

  return (
    <ProductProvider data={product}>
      <Card size="2">
        <Grid gap="2" columns={{ initial: "1", xs: "2" }}>
          <Flex mb="2" position="relative">
            <ImageBox image={product.featuredImage?.url} />
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
              <IconButton size="2" variant="surface">
                <BookmarkIcon />
              </IconButton>
            </Flex>
          </Flex>

          <Box pl="4">
            <Flex align="end" justify="between" mb="2">
              <Box>
                <Flex mb="1" gap="2">
                  {product.collections.edges.map((collection: any) => (
                    <Link
                      key={collection.node.handle}
                      href="#"
                      underline="hover"
                      size="2"
                      highContrast
                    >
                      {collection.node.title}
                    </Link>
                  ))}
                </Flex>

                <Heading as="h3" size="3">
                  {product.title}
                </Heading>
              </Box>

              <Text size="6" weight="bold">
                <ProductPrice />
              </Text>
            </Flex>

            <Text as="p" size="2" color="gray" mb="4">
              {product.description}
            </Text>

            <Box>
              <Separator size="4" my="4" />
            </Box>

            <ProductVariants />

            <Flex direction="column" gap="2" mt="4">
              <AddToCartButton>
              </AddToCartButton>
            </Flex>
          </Box>
        </Grid>
      </Card>
    </ProductProvider>
  );
}
