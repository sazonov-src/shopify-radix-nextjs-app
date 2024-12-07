import { Badge, Skeleton, Button } from "@radix-ui/themes";
import { useCart } from "@shopify/hydrogen-react";

export default function CartPictogram() {
  const { status, totalQuantity } = useCart();

  return (
    <Skeleton
      loading={status === "updating"}
    >
      <Button 
      variant="ghost" 
      size="3" 
      className="relative pr-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      {totalQuantity !== 0 && (
        <Badge
          variant="solid"
          size="1"
          color="red"
          radius="full"
          className="absolute top-2 right-2"
        >
          {totalQuantity}
        </Badge>
      )}
      Cart
    </Button></Skeleton>
  );
}
