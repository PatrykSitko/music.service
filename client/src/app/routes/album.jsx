import React from "react";
import FrameImageCurrentSong from "../components/frame/image/current/song";
import PlayerPreviousSong from "../components/player/list/song/previous.jsx";
import PlayerNextSong from "../components/player/list/song/next.jsx";
import "../app.scss";
import "./album.scss";

document.title = "mp3";

export default function Album() {
  return (
    <div className="album">
      <PlayerPreviousSong />
      <FrameImageCurrentSong />
      <PlayerNextSong />
    </div>
  );
}
