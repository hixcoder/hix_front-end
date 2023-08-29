import { FaQuoteLeft } from "react-icons/fa";

export default function (props: {
  quote: string;
  author: string;
  color: string;
}) {
  return (
    <>
      <div
        style={{ color: props.color }}
        id="text"
        className="text-center  transition-colors duration-1000 ease-in-out mt-4"
      >
        <div className="text-3xl inline-block">
          <FaQuoteLeft />
        </div>
        <span className="text-3xl inline ml-2">{props.quote}</span>
      </div>
      <p
        style={{ color: props.color }}
        id="author"
        className="mt-4 pr-4 w-full text-right  transition-colors duration-1000 ease-in-out"
      >
        - {props.author}
      </p>
    </>
  );
}
