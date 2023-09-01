import { useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  const defaultText = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.

  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

  const [text, setText] = useState(defaultText);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const toggleFullscreenEd = () => {
    if (isFull[0] === 1) {
      setIsFull([0, 0]);
    } else {
      setIsFull([1, -1]);
    }
  };
  const toggleFullscreenPr = () => {
    if (isFull[1] === 1) {
      setIsFull([0, 0]);
    } else {
      setIsFull([-1, 1]);
    }
  };

  const [isFull, setIsFull] = useState([0, 0]);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 ">
        <Editor
          handleTextChange={handleTextChange}
          text={text}
          isFull={isFull}
          toggleFullscreen={toggleFullscreenEd}
        />
        <Previewer
          text={text}
          toggleFullscreen={toggleFullscreenPr}
          isFull={isFull}
        />
      </div>
    </>
  );
}

export default App;
