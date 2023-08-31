import { AiOutlineFullscreen } from "react-icons/ai";
import { IconContext } from "react-icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function (props: { text: string; visibility: string }) {
  return (
    <div
      className={`flex flex-col w-2/3 max-w-2xl border-[1.5px] bg-[] border-black rounded-t-lg bg-green-400 shadow-sm ${props.visibility}`}
    >
      <div className="flex flex-row items-center  p-2">
        <img className="h-5 w-5 mr-2" src="/icon.png" alt="icon" />
        <h3 className="font-bold">Previewer</h3>
        <IconContext.Provider
          value={{
            color: "black",
            className: "ml-auto hover:bg-green-200",
            size: "24",
          }}
        >
          <AiOutlineFullscreen />
        </IconContext.Provider>
      </div>

      <ReactMarkdown
        className="p-1 bg-slate-100 overflow-x-scroll"
        remarkPlugins={[remarkGfm]}
        children={props.text}
      />
    </div>
  );
}
