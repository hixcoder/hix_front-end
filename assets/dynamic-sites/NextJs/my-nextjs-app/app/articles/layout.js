export const metadata = {
  title: "Articles page",
};

export default function ({ children }) {
  return (
    <div>
      <h1>Articles</h1>
      <div>{children}</div>
    </div>
  );
}
