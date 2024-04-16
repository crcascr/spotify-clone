import { useEffect, useRef, useState } from "react";
import { usePlayerStore } from "@/store/playerStore";
import { Slider } from "./Slider";

export const Pause = ({ className }) => (
  <svg className={className} role="img" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = ({ className }) => (
  <svg className={className} role="img" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

export const Previous = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path
      d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
      fill="currentColor"
    ></path>
  </svg>
);

export const Next = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path
      d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
      fill="currentColor"
    ></path>
  </svg>
);

export const Repeat = ({ repeat }) => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path
      d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"
      fill={repeat ? "#1db954" : "currentColor"}
    ></path>
    <path d="M9.12 8V1H7.787c-.128.72-.76 1.293-1.787 1.313V3.36h1.57V8h1.55z"></path>
  </svg>
);

export const VolumeMuted = () => (
  <svg
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path
      d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"
      fill="currentColor"
    ></path>
    <path
      d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"
      fill="currentColor"
    ></path>
  </svg>
);

export const VolumeLow = () => (
  <svg
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path
      d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"
      fill="currentColor"
    ></path>
  </svg>
);

export const VolumeMedium = () => (
  <svg
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path
      d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"
      fill="currentColor"
    ></path>
  </svg>
);

export const VolumeHigh = () => (
  <svg
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path
      d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"
      fill="currentColor"
    ></path>
    <path
      d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"
      fill="currentColor"
    ></path>
  </svg>
);

const CurrentSong = ({ image, title, artists }) => {
  return (
    <div className={`flex items-center gap-5 relative overflow-hidden`}>
      <picture
        className={`w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden`}
      >
        <img src={image} alt={title} />
      </picture>
      <div className="flex flex-col">
        <h3 className="font-semibold text-sm block">{title}</h3>
        <span className="text-xs opacity-80">{artists?.join(", ")}</span>
      </div>
    </div>
  );
};

const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);

  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };

  const songDuration = audio?.current?.duration ?? 0;  

  if (songDuration === currentTime && songDuration !== 0) {
    const { song, playlist, songs } = currentMusic;
    if (song.id < songs.length) {
      setCurrentTime(0);
      const nextSong = songs[song.id];
      setCurrentMusic({ playlist, songs, song: nextSong });
    } else {
      setCurrentTime(0);
      setIsPlaying(false);
    }
  }

  return (
    <div className="flex flex-row gap-2 text-s ">
      <span className="opacity-50 w-12 text-right">
        {currentTime !== 0 ? secondsToMinutes(currentTime) : "-:--"}
      </span>
      <Slider
        defaultValue={[0]}
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        className="w-[400px]"
        onValueChange={(value) => {
          audio.current.currentTime = value;
        }}
      />

      <span className="opacity-50 w-12">
        {!isNaN(songDuration)
          ? songDuration !== 0
            ? secondsToMinutes(songDuration)
            : "-:--"
          : "-:--"}
      </span>
    </div>
  );
};

function secondsToMinutes(seconds) {
  if (seconds == null) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = Math.floor(seconds % 60);
  return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
}

function Player() {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);
  const audioRef = useRef();
  const volumeRef = useRef(1);

  const [volumeMemory, setVolumeMemory] = useState({
    actual: volumeRef.current,
    previous: volumeRef.current,
  });

  const [repeat, setRepeat] = useState(false);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const { song, playlist, songs } = currentMusic;
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volumeRef.current;
      audioRef.current.play();
      if (repeat) {
        audioRef.current.loop = true;
      }
    }
  }, [currentMusic]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    const { song, playlist, songs } = currentMusic;
    if (song) {
      if (songs.length > 1 && song.id > 1) {
        const previousSong = songs[song.id - 1 - 1];
        setCurrentMusic({ playlist, songs, song: previousSong });
      }
    }
  };

  const handleNext = () => {
    if (repeat) {
      setRepeat(false);
    }
    const { song, playlist, songs } = currentMusic;
    if (song) {
      if (songs.length > 1 && song.id < songs.length) {
        const nextSong = songs[song.id - 1 + 1];
        setCurrentMusic({ playlist, songs, song: nextSong });
      }
    }
  };

  if (repeat && isPlaying) {
    audioRef.current.loop = true;
  }

  return (
    <div className="flex flex-row justify-between w-full px-2 z-50">
      <div className="w-[200px]">
        <CurrentSong {...currentMusic.song} />
      </div>
      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center flex-col items-center">
          <div className="flex flex-row gap-4">
            <button
              className="text-white/[0.7] p-2 w-8 h-8 hover:text-white"
              onClick={handlePrevious}
            >
              <Previous />
            </button>
            <button
              className="bg-white rounded-full p-2 w-8 h-8"
              onClick={handleClick}
            >
              {isPlaying ? <Pause /> : <Play />}
            </button>
            <div className="flex flex-row gap-2">
              <button
                className="text-white/[0.7] p-2 w-8 h-8 hover:text-white"
                onClick={handleNext}
              >
                <Next />
              </button>
              <button
                className="text-white/[0.7] p-2 w-8 h-8 hover:text-white"
                onClick={() => setRepeat(!repeat)}
              >
                <Repeat repeat={repeat} />
              </button>
            </div>
          </div>
          <SongControl audio={audioRef} />
          <audio ref={audioRef} />
        </div>
      </div>
      <div className="flex flex-row items-center">
        <button
          className="rounded-full text-zinc-400 hover:text-zinc-100 transition-all h-8 w-8 flex justify-center items-center"
          onClick={() => {
            if (volumeMemory.actual !== 0) {
              volumeRef.current = 0;
              audioRef.current.volume = 0;
              setVolumeMemory((prevVolume) => ({ ...prevVolume, actual: 0 }));
            } else {
              volumeRef.current = volumeMemory.previous;
              audioRef.current.volume = volumeMemory.previous;
              setVolumeMemory((prevVolume) => ({
                ...prevVolume,
                actual: volumeMemory.previous,
              }));
            }
          }}
        >
          {volumeMemory.actual === 0 ? (
            <VolumeMuted />
          ) : volumeMemory.actual < 0.3 ? (
            <VolumeLow />
          ) : volumeMemory.actual < 0.6 ? (
            <VolumeMedium />
          ) : (
            <VolumeHigh />
          )}
        </button>
        <div className="grid place-content-center">
          <Slider
            defaultValue={[100]}
            max={100}
            min={0}
            className="w-[95px]"
            onValueChange={(value) => {
              const newVolume = value;
              const volumeValue = newVolume / 100;
              volumeRef.current = volumeValue;
              audioRef.current.volume = volumeValue;
              setVolumeMemory({ actual: volumeValue, previous: volumeValue });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
