import { AiOutlineFullscreenExit } from "react-icons/ai";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IconContext } from "react-icons";
import { ChangeEventHandler, useState } from "react";

export default function (props: {
  handleTextChange: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  text: string;
  isFull: boolean;
  height: string;
  visibility: string;
  toggleFullscreen: () => void;
}) {
  return (
    <div
      className={`flex flex-col w-1/2 max-w-md h-fit border-[1.5px] bg-[] border-black rounded-t-lg bg-green-400 shadow-sm ${props.visibility}`}
    >
      <div className="flex flex-row items-center  p-2">
        <img className="h-5 w-5 mr-2" src="/icon.png" alt="icon" />
        <h3 className="font-bold">Editor</h3>
        <IconContext.Provider
          value={{
            color: "black",
            className: "ml-auto hover:bg-green-200",
            size: "24",
          }}
        >
          {props.isFull ? (
            <AiOutlineFullscreenExit onClick={props.toggleFullscreen} />
          ) : (
            <AiOutlineFullscreen onClick={props.toggleFullscreen} />
          )}
        </IconContext.Provider>
      </div>
      <textarea
        className={`!outline-none p-1 border-red-600 hover:scroll-auto ${props.height}`}
        rows={5}
        cols={50}
        value={props.text}
        onChange={props.handleTextChange}
        placeholder="Enter your text here..."
      />
    </div>
  );
}
