import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { IconContext } from "react-icons";
import MarkdownPreviewer from "./MarkdownPreviewer";

export default function (props: {
  text: string;
  isFull: number[];
  toggleFullscreen: () => void;
}) {
  return (
    <div
      id="preview"
      className={`flex flex-col w-3/4 max-w-3xl border-[1.5px] border-black rounded-t-lg bg-green-400 shadow-sm ${
        props.isFull[1] == -1 ? "hidden" : "visible"
      }`}
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
          {props.isFull[1] == 1 ? (
            <AiOutlineFullscreenExit onClick={props.toggleFullscreen} />
          ) : (
            <AiOutlineFullscreen onClick={props.toggleFullscreen} />
          )}
        </IconContext.Provider>
      </div>

      <MarkdownPreviewer markdownText={props.text} isFull={props.isFull} />
    </div>
  );
}
