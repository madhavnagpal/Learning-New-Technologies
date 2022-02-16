import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1>
      review product {productId} - review - {reviewId}
    </h1>
  );
}

export default Review;
