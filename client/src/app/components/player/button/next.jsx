import React from "react";
import Next from "./svg/next";
import { useColorEffect } from "./effects";
import { connect } from "react-redux";
import switchNext from "../../../../redux/actions/player/switch/next";
import "../style.scss";

const mapStateToProps = ({ state: { player } }) => ({ player });
const mapDispatchToProps = dispatch => ({
  switchNext: player => dispatch(switchNext(player))
});

function PlayerButtonNext({
  player,
  switchNext,
  colors = {
    click: "green",
    hover: "orange",
    idle: "blue"
  },
  ...other
}) {
  const { color, setHovering, setClicked } = useColorEffect(colors);
  return (
    <div
      className="player-next-button"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      {...other}
    >
      <Next {...{ color }} onClick={e => setClicked(e) || switchNext(player)} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerButtonNext);
