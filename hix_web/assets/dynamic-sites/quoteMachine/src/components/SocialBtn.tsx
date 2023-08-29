import { ReactNode } from "react";

export default function (props: { children: ReactNode; id: string }) {
  return (
    <div className="flex-none flex items-center justify-center bg-[#2274d2] rounded-md text-white p-2 px-3 mr-2 text-center">
      <a id={props.id} href="#">
        {props.children}
      </a>
    </div>
  );
}
