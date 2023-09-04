import Link from "next/link";

export default function ArticlePage() {
  return (
    <div>
      <h1 className="main-div">Article Page</h1>
      <Link href={"/posts"}>
        <button>next Page</button>
      </Link>
    </div>
  );
}
