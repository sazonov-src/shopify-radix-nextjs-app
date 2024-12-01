import ProductMiniCard from "@/components/ProductMiniCard";
import { Box, Grid } from "@radix-ui/themes";
import { client } from "@/shopify-client";

const GRAPHQL_QUERY = `
query getProducts($first: Int) {
  products(first: $first) {
    edges {
      cursor
      node {
        id
        title
        description
        images(first: 1) {
          nodes {
            url
          }
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
    // Generate the headers using the private token.
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
            image={product.node.images.nodes[0]?.url}
            title={product.node.title}
            description={product.node.description}
          />
          
        ))}
      </Grid>
    </Box>
  );
}
