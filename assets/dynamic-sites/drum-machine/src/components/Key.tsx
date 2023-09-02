import { useRef } from "react";

export default function (props: {
  keyc: string;
  size: string;
  id: number;
  isPower: boolean;
  updateControlText: (newValue: string) => void;
  // onClicked: void;
}) {
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

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playAudio = () => {
    if (!props.isPower) {
      return;
    }
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Rewind the audio to the beginning
      audioRef.current.play();
    }
    props.updateControlText(audioList[props.id][0]);
  };

  return (
    <div
      id={`key-${props.id}`}
      className={`cursor-pointer drum-pad flex justify-center items-center
      bg-gray-500 w-${props.size} h-${props.size} rounded-md 
        drop-shadow-[1px_2px_0.5px_rgba(0,0,0,10)] font-bold
      ${
        props.isPower
          ? "active:bg-yellow-500 active:drop-shadow-none active:border-none"
          : ""
      }`}
      onClick={playAudio}
    >
      <audio ref={audioRef}>
        <source src={audioList[props.id][1]} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p className="text-black">{props.keyc}</p>
    </div>
  );
}
