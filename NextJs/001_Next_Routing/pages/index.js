import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const onPlaceOrder = () => {
    console.log("Placing order");
    // router.push("/product");
    router.replace("/product");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <div>
        <Link href="/product">
          <a>Products</a>
        </Link>
      </div>
      <button onClick={onPlaceOrder}>Place Order</button>
    </div>
  );
};

export default Home;
