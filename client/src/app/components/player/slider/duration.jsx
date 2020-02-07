import React, { useState, useEffect } from "react";
import setRequestedTime from "../../../../redux/actions/player/set/requested/time";
import { connect } from "react-redux";
import PlayerSlider from "./";
import "../style.scss";

const mapStateToProps = ({ state: { player, mouse } }) => ({
  player,
  mouse
});
const mapDispatchToProps = dispatch => ({
  setRequestedTime: (player, requestedTime) =>
    dispatch(setRequestedTime(player, requestedTime))
});
function PlayerSliderDuration({ player, mouse, setRequestedTime, ...other }) {
  const [timeoutTracked, setTimeoutTracker] = useState(false);
  const {
    song: {
      time: { now, total }
    }
  } = player;
  const [[sliderRect, setSliderRect], [sliderNobRect, setSliderNobRect]] = [
    useState({}),
    useState({})
  ];
  useEffect(() => {
    if (!timeoutTracked) {
      setTimeout(() => {
        if (
          !sliderRect.width ||
          !sliderNobRect.width ||
          (mouse.down &&
            mouse.down.button === 0 &&
            mouse.down.target &&
            [
              "player-slider duration",
              "player-slider-nob duration",
              "player-slider-filler duration"
            ].includes(mouse.down.target.className))
        ) {
          return;
        }

        const _1unit = total / 100;
        const currentUnits = now / _1unit;
        const slider1unit = (sliderRect.width - sliderNobRect.width) / 100;
        // const sliderTotalUnits = (sliderRect.x - sliderNobRect.x) / slider1unit;
        const nobPosition = slider1unit * currentUnits;
        if (typeof nobPosition === "number") {
          setSliderNobRect({
            ...sliderNobRect,
            x: nobPosition
          });
        }
        setTimeoutTracker(clearTimeout(timeoutTracked));
      }, 10);
    }
  }, [
    now,
    total,
    sliderRect,
    sliderNobRect,
    setSliderNobRect,
    timeoutTracked,
    mouse.down
  ]);
  return (
    <PlayerSlider
      {...other}
      className="duration"
      onMousedownNob={rect => {
        const _1unit = total / 100;
        const slider1unit = (sliderRect.width - rect.width) / 100;
        const sliderCurrentUnits = (sliderRect.x - rect.x) / slider1unit;
        const newNow = _1unit * sliderCurrentUnits;
        setRequestedTime(player, -newNow);
      }}
      useSliderRectState={[sliderRect, setSliderRect]}
      useSliderNobRectState={[sliderNobRect, setSliderNobRect]}
    ></PlayerSlider>
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSliderDuration);
