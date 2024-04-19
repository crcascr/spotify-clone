import { usePlayerStore } from "../store/playerStore";

export const ActualSong = ({ fillColor }) => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path
      d="M10.016 1.125A.75.75 0 0 0 8.99.85l-6.925 4a3.639 3.639 0 0 0 0 6.299l6.925 4a.75.75 0 0 0 1.125-.65v-13a.75.75 0 0 0-.1-.375zM11.5 5.56a2.75 2.75 0 0 1 0 4.88V5.56z"
      fill={fillColor}
    ></path>
    <path
      d="M16 8a5.752 5.752 0 0 1-4.5 5.614v-1.55a4.252 4.252 0 0 0 0-8.127v-1.55A5.752 5.752 0 0 1 16 8z"
      fill={fillColor}
    ></path>
  </svg>
);

function AsideMenuCard({ playlist }) {
  const { currentMusic, isPlaying } = usePlayerStore();
  const { id, cover, title, artists } = playlist;
  return (
    <a
      href={`/playlist/${id}`}
      className="playlist-item flex relative p-2 overflow-hidden items-center gap-4 rounded-md hover:bg-zinc-800"
    >
      <picture className="h-12 w-12 flex-none">
        <img
          src={cover}
          alt={`Cover of ${title} by ${artists.join(", ")}`}
          className="object-cover w-full h-full rounded-md"
        />
      </picture>
      <div className="flex flex-auto flex-col truncate">
        <h4 className="text-white text-sm">{title}</h4>
        <span className="text-gray-400 text-xs">{artists.join(", ")}</span>
      </div>
      <div>
        {isPlaying && currentMusic?.playlist?.id === playlist.id ? (
          <ActualSong fillColor="#22c55e" />
        ) : null}
      </div>
    </a>
  );
}

export default AsideMenuCard;
