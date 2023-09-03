import { useState } from "react";
import DrumPad from "./components/DrumPad";
import { Slider } from "@/components/ui/slider";
import Toogle from "./components/Toogle";

function App() {
  const keysList = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const [controlText, setControlText] = useState<string>("Power ON");
  const [isPower, setIsPower] = useState(true);
  const [volume, setVolume] = useState(50);

  // Define a function to update the ControlText
  const updateControlText = (newValue: string) => {
    setControlText(newValue);
  };

  // Define a function to update the ControlText
  const updateIsPower = () => {
    isPower ? setIsPower(false) : setIsPower(true);
  };

  const handleVolumeChange = (newValue: number[]) => {
    setVolume(newValue[0]);
    setControlText("Volume: " + newValue[0]);
  };

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
                <DrumPad
                  id={i}
                  key={i}
                  keyc={element}
                  isPower={isPower}
                  size="20"
                  volume={volume}
                  updateControlText={updateControlText} // onClicked={setIndex(i)}
                />
              ))}
            </div>

            {/* here is the config */}
            <div
              id="display"
              className="flex flex-col justify-center items-center w-1/2"
            >
              <Toogle
                title="Power"
                onClick={updateIsPower}
                isChecked={isPower}
              />
              <p className="my-2 p-4 w-1/2 rounded-md text-center bg-gray-500">
                {controlText}
              </p>
              <Slider
                className="py-4 w-40"
                defaultValue={[volume]}
                min={0}
                max={100}
                step={1}
                onValueChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
