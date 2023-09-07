import "./styles/homePage.css";
import ShortDesc from "./components/HomePage//ShortDesc";
import { EmblaCarousel } from "./components/HomePage/EmblaCarousel";
import Prompt from "./components/HomePage/Prompt";
import QuestionCard from "./components/HomePage/QuestionCard";

export default function HomePage() {
  return (
    <div className="flex flex-col w-screen h-fit">
      <div className="flex flex-row w-screen h-fit mt-24">
        <ShortDesc />
        <Prompt />
      </div>
      <EmblaCarousel />
      <div
        className="grid grid-cols-2 justify-center items-center gap-x-8 gap-y-8 
        bg-gradient-to-tr from-blue-500 to-blue-600 h-fit mb-20 px-8 py-24"
      >
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  );
}
