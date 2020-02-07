import React from "react";
import Previous from "./svg/next";
import { useColorEffect } from "./effects";
import { connect } from "react-redux";
import switchPrevious from "../../../../redux/actions/player/switch/previous";
import "../style.scss";

const mapStateToProps = ({ state: { player } }) => ({ player });
const mapDispatchToProps = dispatch => ({
  switchPrevious: player => dispatch(switchPrevious(player))
});

function PlayerButtonPrevious({
  player,
  switchPrevious,
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
      className="player-previous-button"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      {...other}
    >
      <Previous
        {...{ color }}
        onClick={e => setClicked(e) || switchPrevious(player)}
      />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerButtonPrevious);
