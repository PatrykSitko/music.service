import React, { useState } from "react";
import SongControls from "./button/group/controls/song";
import VolumeControls from "./button/group/controls/volume";
import DurationSlider from "./slider/duration";
import "./style.scss";

function PlayerContainer() {
  const [mouseExited, setMouseExited] = useState(true);
  return [
    <div key="player-bottom-filler" className="player-bottom-filler" />,
    <div
      key="player"
      className="player-container"
      onMouseLeave={() => setMouseExited(true)}
    >
      <DurationSlider />
      <SongControls />
      <VolumeControls useMouseExitedState={[mouseExited, setMouseExited]} />
    </div>
  ];
}

export default PlayerContainer;
