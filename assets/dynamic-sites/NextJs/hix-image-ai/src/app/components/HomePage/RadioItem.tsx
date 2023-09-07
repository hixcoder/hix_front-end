"use client";
import { useState } from "react";

interface HixRadioProps {
  id: string;
  name: string;
  value?: string;
}

export default function HixRadio({ id, name, value = id }: HixRadioProps) {
  console.log("value is " + value);
  return (
    <label className="flex items-center pl-4 pr-2 py-3 rounded-full border border-gray-300  mt-4 cursor-pointer ">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className="h-5 w-5  border checked:bg-blue-white radio checked:bg-blue-200 "
      />

      <label
        htmlFor={id}
        className="flex-1 block font-normal mx-4  text-gray-900 text-[12px] cursor-pointer"
      >
        {value.toUpperCase()}
      </label>
    </label>
  );
}
