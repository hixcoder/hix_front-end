import { FaQuoteLeft } from "react-icons/fa";

export default function (props: { quote: string; author: string }) {
  return (
    <>
      <div id="text" className="text-center text-green-400 mt-4">
        <div className="text-3xl inline-block">
          <FaQuoteLeft />
        </div>
        <span className="text-3xl inline ml-2">{props.quote}</span>
      </div>
      <p id="author" className="mt-4 text-green-400 pr-4 w-full text-right">
        - {props.author}
      </p>
    </>
  );
}
