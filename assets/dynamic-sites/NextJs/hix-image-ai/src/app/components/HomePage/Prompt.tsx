import Image from "next/image";
import HixRadio from "./RadioItem";
import RadioLabel from "./RadioLabel";

export default function Prompt() {
  return (
    <div className="flex flex-col items-left w-3/5 h-4/5 bg-slate-50 p-6 rounded-lg">
      <div className="mb-5">
        <label className="text-sm mt-2 text-gray-900  font-medium">
          Prompt
        </label>
        <textarea
          className="block mt-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
          focus:border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe anything that hits your mind (for example: woman in amor with a sword in her hand)"
          rows={4}
        ></textarea>
      </div>
      <RadioLabel labelName="Choose Model">
        <HixRadio id="v4" name="model" />
        <HixRadio id="niji V4" name="model" />
      </RadioLabel>
      <RadioLabel labelName="Choose Model">
        <HixRadio id="Square(1:1)" name="aspectRatio" />
        <HixRadio id="Mobile Vertical(9:16)" name="aspectRatio" />
        <HixRadio id="Widescreen(16:9)" name="aspectRatio" />
        <HixRadio id="Portrait(3:4)" name="aspectRatio" />
        <HixRadio id="Landscape(4:3)" name="aspectRatio" />
      </RadioLabel>

      <button className="bg-blue-500 w-fit text-white px-8 py-3 border-2 border-transparent rounded-md text-md my-5 shadow-[0_0_10px_1px_rgba(59,130,246,0.5)]  animate-bounce hover:animate-none">
        Generate{" "}
      </button>
    </div>
  );
}
