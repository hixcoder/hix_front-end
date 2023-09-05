import Todo from "../components/todo";
import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // if you want to make the component ISG or SSR or SSG use one of this values:

    //  ISG : Incremental Static Generation
    next: {
      revalidate: 120, // time you want to make the request cached ===> in seconds[60sec]
    },

    // SSR : Server Side Rendring
    cache: "no-store",

    // SSG : Static Site Generation [default value]
    cache: "force-cache",
  });
  const posts = await response.json();
  const postsJSX = posts.map((post) => {
    return (
      <div className="posts">
        <Link href={`/posts/${post.id}`}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </Link>
      </div>
    );
  });
  console.log(posts);
  return (
    <>
      <div>
        <h1 className="pageTitle">PostsPage</h1>
      </div>
      {/* posts  */}
      <div className="posts-div">{postsJSX}</div>
    </>
  );
}
