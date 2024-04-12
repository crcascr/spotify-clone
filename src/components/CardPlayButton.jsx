import { Pause, Play } from "./Player";

import { usePlayerStore } from "@/store/playerStore";

function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = () => {

    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    fetch(`/api/get-info-playlist-json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
          const {songs, playlist} = data
          setIsPlaying(true);
          setCurrentMusic({playlist, songs, song: songs[0]})
      })

  };

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
