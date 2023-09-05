import { resolve } from "styled-jsx/css";
import PostDetails from "@/app/components/postDetail";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
  const laoding = (
    <div className="posts-div">
      <h1 className="pageTitle">Loading...</h1>
    </div>
  );
  return (
    <div>
      <h1 className="pageTitle">Post Details</h1>
      <Suspense fallback={laoding}>
        <PostDetails params={params} />
      </Suspense>
    </div>
  );
}
