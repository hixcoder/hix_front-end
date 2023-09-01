import { useRef } from "react";

export default function (props: {
  keyc: string;
  size: string;
  id: string;
  audioUrl: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Rewind the audio to the beginning
      audioRef.current.play();
    }
  };

  return (
    <div
      id={`key-${props.id}`}
      className={`cursor-pointer drum-pad flex justify-center items-center bg-gray-600 w-${props.size} h-${props.size} rounded-md drop-shadow-[1px_2px_0.5px_rgba(0,0,0,10)]  `}
      onClick={playAudio}
    >
      <audio ref={audioRef}>
        <source src={props.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p className="text-black">{props.keyc}</p>
    </div>
  );
}
