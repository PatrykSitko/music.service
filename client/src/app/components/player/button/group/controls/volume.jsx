import React from "react";
import MuteButton from "../../mute";
import VolumeSlider from "../../../slider/volume";
import "../../../style.scss";

function GroupControlsVolume({ useMouseExitedState }) {
  const [mouseExited, setMouseExited] = useMouseExitedState;
  return (
    <div className="player-button-group-controls-volume">
      <MuteButton useClearMouseExitedState={[mouseExited, setMouseExited]} />
      <VolumeSlider hidden={mouseExited} />
    </div>
  );
}

export default GroupControlsVolume;
