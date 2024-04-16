import { Pause, Play } from "./Player";

import { usePlayerStore } from "@/store/playerStore";

function CardPlayButton({ id, size = "small" }) {
  const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;
  const isPausedPlaylist = !isPlaying && currentMusic?.playlist?.id === id;

  const handleClick = () => {
    {
      if (isPlayingPlaylist) {
        setIsPlaying(false);
        return;
      }
      if (isPausedPlaylist) {
        setIsPlaying(true);
        return;
      }
    }

    fetch(`/api/get-info-playlist-json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;
        setIsPlaying(true);
        setCurrentMusic({ playlist, songs, song: songs[0] });
      });
  };

  const iconClassName = size === "small" ? "w-4 h-4" : "w-6 h-6";

  return (
    <button
      className="card-play-button rounded-full bg-green-500 p-3 hover:scale-105 transition hover:bg-green-400"
      onClick={handleClick}
    >
      {isPlayingPlaylist ? (
        <Pause className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  );
}

export default CardPlayButton;
