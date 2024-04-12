import { Pause, Play } from "./Player";

import { usePlayerStore } from "@/store/playerStore";

function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } =
    usePlayerStore((state) => state);

  const handleClick = () => {
    setCurrentMusic({
      playlist: {
        id,
      },
    });

    setIsPlaying(!isPlaying);
  };

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  return (
    <button
      className="card-play-button rounded-full bg-green-500 p-3"
      onClick={handleClick}
    >
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  );
}

export default CardPlayButton;
