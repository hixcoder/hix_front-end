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
    <label className="flex items-center pl-4 pr-2 py-3 rounded-full border border-gray-300  mt-4">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className="h-5 w-5 border-2 shadow-md focus:shadow-indigo-300 accent-blue-500"
      />
      <label
        htmlFor={id}
        className="flex-1 block font-normal mx-4  text-gray-900 text-[12px] "
      >
        {value.toUpperCase()}
      </label>
    </label>
  );
}
