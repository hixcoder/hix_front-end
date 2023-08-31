import { useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  const [text, setText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const toggleFullscreen = () => {
    setHeight((prevHeight) => (prevHeight === "h-fit" ? "h-[90vh]" : "h-fit"));
    setIsEditorFull((prevIsFull) => (prevIsFull === false ? true : false));
    setPreviewerIsFull((prevIsFull) => (prevIsFull === false ? true : false));
    if (!isEditorFull) {
      setVisibility("invisible");
    } else {
      setVisibility("visible");
    }
  };
  const [height, setHeight] = useState("h-fit");
  const [isEditorFull, setIsEditorFull] = useState(false);
  const [isPreviewerFull, setPreviewerIsFull] = useState(false);
  const [visibility, setVisibility] = useState("visible");

  return (
    <>
      <div className="flex flex-col items-center justify-center m-10 ">
        <Editor
          handleTextChange={handleTextChange}
          text={text}
          height={height}
          isFull={isEditorFull}
          visibility={visibility}
          toggleFullscreen={toggleFullscreen}
        />
        <br className="mt-16" />
        <Previewer text={text} visibility={visibility} />
      </div>
    </>
  );
}

export default App;
