import { useState } from "react";
import Toogle from "./components/toogle";
import Key from "./components/Key";
import { Slider } from "@/components/ui/slider";

function App() {
  const keysList = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const audioList = [
    ["Heater 1", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"],
    ["Heater 2", "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"],
    ["Heater 3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"],
    ["Heater 4", "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"],
    ["Clap", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"],
    ["Open-HH", "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"],
    [
      "Kick-n'-Hat",
      "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    ],
    ["Kick", "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"],
    ["Closed-HH", "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"],
  ];
  return (
    <>
      <div
        id="drum-machine"
        className="flex flex-col justify-center items-center w-full h-screen"
      >
        <div className="flex flex-col w-[40rem] h-[20rem] border-yellow-500 border-4 bg-gray-300 rounded-lg p-2">
          <img
            className="w-8 h-8 m-1 ml-auto"
            src="/drum.png"
            alt="drum icon"
          />

          <div className="flex flex-row  h-full ">
            {/* this is the keys */}
            <div className="grid grid-rows-3 grid-flow-col gap-2 m-4 w-1/2 h-4/5">
              {keysList.map((element, i) => (
                <Key
                  id={`${i}`}
                  key={i}
                  keyc={element}
                  size="20"
                  audioUrl={audioList[i][1]}
                />
              ))}
            </div>

            {/* here is the config */}
            <div
              id="display"
              className="flex flex-col justify-center items-center w-1/2"
            >
              <Toogle title="Power" />
              <p className="my-2 p-4 w-1/2 rounded-md text-center bg-gray-500">
                Clap
              </p>
              <Slider
                className="py-4 w-40"
                defaultValue={[50]}
                max={100}
                step={1}
              />
              <Toogle title="Bank" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
