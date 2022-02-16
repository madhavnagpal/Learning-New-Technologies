import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;
  return <h1>Product detail {productId}</h1>;
}

export default ProductDetail;
