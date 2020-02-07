import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PlayerSlider from "./";
import setVolume from "../../../../redux/actions/player/set/volume";
import setMuted from "../../../../redux/actions/player/set/muted";
import "../style.scss";

const mapStateToProps = ({ state: { player } }) => ({
  player
});
const mapDispatchToProps = dispatch => ({
  setVolume: (player, volume) => dispatch(setVolume(player, volume)),
  setMuted: (player, isMuted) => dispatch(setMuted(player, isMuted))
});
function PlayerSliderVolume({ player, setVolume, setMuted, ...other }) {
  const [[sliderRect, setSliderRect], [sliderNobRect, setSliderNobRect]] = [
    useState({}),
    useState({})
  ];
  useSetVolume(player, setVolume, setMuted, sliderNobRect, sliderRect);
  return (
    <PlayerSlider
      {...other}
      className="volume"
      useSliderRectState={[sliderRect, setSliderRect]}
      useSliderNobRectState={[sliderNobRect, setSliderNobRect]}
    ></PlayerSlider>
  );
}

function useSetVolume(player, setVolume, setMuted, sliderNobRect, sliderRect) {
  useEffect(() => {
    let currentVolume = parseFloat(
      (
        (sliderNobRect.x - sliderRect.x) /
        ((sliderRect.width - sliderNobRect.width) / 100) /
        100
      ).toFixed(2)
    );
    if (player.volume !== currentVolume) {
      setVolume(player, currentVolume);
      if (currentVolume <= 0 && !player.muted) {
        setMuted(player, true);
      } else if (currentVolume > 0 && player.muted) {
        setMuted(player, false);
      }
    }
  }, [player, setVolume, setMuted, sliderNobRect, sliderRect]);
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerSliderVolume);
