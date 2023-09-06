import ShortDesc from "./components/HomePage//ShortDesc";
import Prompt from "./components/HomePage/Prompt";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-row w-screen h-3/5 mt-24">
        <ShortDesc />
        <Prompt />
      </div>
    </div>
  );
}
