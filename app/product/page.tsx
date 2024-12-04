import ProductMiniCard from "@/components/ProductMiniCard";
import { Box, Grid } from "@radix-ui/themes";
import { client } from "@/shopify-client";
import Cart from "@/components/shopify/Cart";

const GRAPHQL_QUERY = 
`#graphql
query getProducts($first: Int) {
  products(first: $first) {
    edges {
      cursor
      node {
        id
        title
        description
        handle
        featuredImage {
          altText
          height
          id
          url(transform: { maxWidth: 800 }) # Example transform option
        }
      }
    }
  }
}`;

export default async function Home() {
  const response = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
      variables: {first: 15},
    }),
    headers: client.getPublicTokenHeaders(),
    method: "POST",
  });

  const products: any[] = (await response.json()).data.products.edges

  return (
    <Box>
      <Grid 
        gap="4" 
        columns={{initial: "2", sm: "3"}}
      >
        {products.map((product) => (
          <ProductMiniCard 
            key={product.node.id}
            image={product.node.featuredImage?.url}
            title={product.node.title}
            description={product.node.description}
            handle={product.node.handle}
          />

        ))}
      </Grid>
    </Box>
  );
}
