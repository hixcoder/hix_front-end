import { marked } from "marked";

export default function MarkdownPreviewer(props: {
  markdownText: string;
  isFull: number[];
}) {
  // Function to convert Markdown text to HTML with line breaks
  const convertToHtmlWithLineBreaks = (text: string) => {
    const options = {
      breaks: true, // Enable line breaks
    };

    // Convert Markdown text to HTML
    const htmlText = marked.parse(text, options);

    return htmlText;
  };

  return (
    <div
      className={`p-4 bg-slate-100 overflow-x-scroll ${
        props.isFull[1] == 1 ? "h-[90vh]" : "h-fit"
      }`}
    >
      {/* Render the HTML with line breaks */}
      <div
        dangerouslySetInnerHTML={{
          __html: convertToHtmlWithLineBreaks(props.markdownText),
        }}
      />
    </div>
  );
}
