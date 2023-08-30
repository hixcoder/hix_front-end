import { ReactNode } from "react";

export default function (props: {
  children: ReactNode;
  id: string;
  color: string;
}) {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className="flex-none flex items-center justify-center rounded-md text-white p-2 px-3 mr-2 text-center transition-colors duration-1000 ease-in-out"
    >
      <a id={props.id} href="#">
        {props.children}
      </a>
    </div>
  );
}
