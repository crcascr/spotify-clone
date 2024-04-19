import { usePlayerStore } from "../store/playerStore";
import PlayingEqualizer from "../icons/PlayingEqualizer.gif";
import { Play, Pause } from "./Player";
import { useState } from "react";

export const Time = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path
      d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
      fill="currentColor"
    ></path>
    <path
      d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"
      fill="currentColor"
    ></path>
  </svg>
);

function PlaylistSongsTable({ songs, playlistSelected }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const playlist = playlistSelected;

  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <table className="table-auto text-left min-w-full divide-y divide-gray-500/20">
      <thead className="text-gray-400 text-sm border-collapse">
        <tr>
          <th className="px-4 py-2 font-normal">#</th>
          <th className="px-4 py-2 font-normal">Título</th>
          <th className="px-4 py-2 font-normal">Álbum</th>
          <th className="px-4 py-2 font-normal">
            <Time />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-[10px]">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {songs.map((song, index) => (
          <tr
            key={index}
            className="h-14 hover:bg-white/10 transition duration-200"
            onMouseEnter={() => setHoveredRow(song)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <td
              className={`px-4 py-2 rounded-l w-5 ${
                currentMusic?.song?.id === song.id &&
                currentMusic?.song?.albumId === song.albumId
                  ? "text-green-500"
                  : "text-white"
              }`}
            >
              {currentMusic?.song?.id === song.id &&
              currentMusic?.song?.albumId === song.albumId ? (
                isPlaying ? (
                  hoveredRow?.id === song.id ? (
                    <button onClick={() => setIsPlaying(false)}>
                      <Pause className="w-3.5 h-3.5 fill-white" />
                    </button>
                  ) : (
                    <picture className="min-w-[14px] min-h-[14px]">
                      <img
                        src={PlayingEqualizer.src}
                        alt="Playing Equalizer"
                        className="min-w-[14px] min-h-[14px]"
                      />
                    </picture>
                  )
                ) : hoveredRow?.id === song.id ? (
                  <button onClick={() => setIsPlaying(true)}>
                    <Play className="w-3.5 h-3.5 fill-white" />
                  </button>
                ) : (
                  <p className="w-3.5 h-3.5 p-0 flex items-center content-center flex-wrap">
                    {index + 1}
                  </p>
                )
              ) : hoveredRow?.id === song.id ? (
                <button
                  onClick={() => {
                    setCurrentMusic({ playlist, song, songs });
                    setIsPlaying(true);
                  }}
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                </button>
              ) : (
                <p className="w-3.5 h-3.5 p-0 flex items-center content-center flex-wrap">
                  {index + 1}
                </p>
              )}
            </td>
            <td className="px-4 py-2 flex gap-3">
              <picture className="">
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-10 h-10 rounded"
                />
              </picture>
              <div className="flex flex-col">
                <h3
                  className={
                    currentMusic?.song?.id === song.id &&
                    currentMusic?.song?.albumId === song.albumId
                      ? "text-green-500"
                      : "text-white"
                  }
                >
                  {song.title}
                </h3>
                <span className="text-sm text-gray-400">
                  {song.artists?.join(", ")}
                </span>
              </div>
            </td>
            <td className="px-4 py-2 text-sm text-gray-400">{song.album}</td>
            <td className="px-4 py-2 text-sm text-gray-400 rounded-r">
              {song.duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlaylistSongsTable;
