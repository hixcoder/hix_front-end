import HixRadio from "./RadioItem";

export default function RadioLabel(prompt: {
  labelName: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <label className="text-sm mt-2 text-gray-900 font-medium">
        {prompt.labelName}
      </label>
      <div className="grid grid-cols-3 gap-x-8">{prompt.children}</div>
    </div>
  );
}
