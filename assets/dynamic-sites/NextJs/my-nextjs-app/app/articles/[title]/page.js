export default function ShowArticlePage(props) {
  console.log(props);
  return (
    <div>
      <h1>{`show articles: ${props["params"]["title"]}`}</h1>
    </div>
  );
}
