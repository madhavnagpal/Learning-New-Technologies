import Link from "next/link";

const Post = ({ post }) => (
  <>
    <div>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>
    <h2>
      {post.id} - {post.title}
      <p>{post.body}</p>
    </h2>
  </>
);

export default Post;

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((post) => ({
  //   params: { postId: String(post.id) },
  // }));

  const paths = [
    { params: { postId: "1" } },
    { params: { postId: "2" } },
    { params: { postId: "3" } },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return { props: { post: data } };
}
