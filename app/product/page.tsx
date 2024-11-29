import ProductMiniCard from "@/components/ProductMiniCard";
import { Box, Grid } from "@radix-ui/themes";

export default function Home() {
  return (
    <Box>
      <Grid 
        gap="4" 
        columns={{initial: "2", sm: "3"}}
      >
        <ProductMiniCard />
        <ProductMiniCard />
        <ProductMiniCard />
        <ProductMiniCard />
      </Grid>
    </Box>
  );
}
