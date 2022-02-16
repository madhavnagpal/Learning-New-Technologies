import Link from "next/link";

const Home = () => (
  <>
    <h1>Next Js pre rendering</h1>
    <div>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>
  </>
);

export default Home;
