import React from "react";
import PlayButton from "../../play";
import NextButton from "../../next";
import PreviousButton from "../../previous";
import ShuffleButton from "../../shuffle";
import TimeDisplay from "../../../display/time";
import "../../../style.scss";

function GroupControlsSong() {
  return (
    <div className="player-button-group-controls-song">
      <ShuffleButton />
      <PreviousButton />
      <PlayButton />
      <NextButton />
      <TimeDisplay />
    </div>
  );
}

export default GroupControlsSong;
