import { resolve } from "styled-jsx/css";

export default async function PostDetails({ params }) {
  const postId = params.postId;
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  console.log(post);
  return (
    <div className="posts-div">
        <div className="posts">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </div>
  );
}


