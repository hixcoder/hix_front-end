import Todo from "../components/todo";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    // if you want to make the component ISG or SSR or SSG use one of this values:

    //  ISG : Incremental Static Generation
    next: {
      revalidate: 60, // time you want to make the request cached ===> in seconds[60sec]
    },

    // SSR : Server Side Rendring
    cache: "no-store",

    // SSG : Static Site Generation [default value]
    cache: "force-cache",
  });
  const todo = await response.json();
  return (
    <>
      <div>
        <h1 className="main-div">{todo.title}</h1>
      </div>

      <div>
        <Todo />
      </div>
    </>
  );
}
