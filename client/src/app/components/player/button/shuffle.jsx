import React from "react";
import Shuffle from "./svg/shuffle";
import { useColorEffect } from "./effects";
import setShuffle from "../../../../redux/actions/player/set/shuffle";
import { connect } from "react-redux";
import "../style.scss";

const mapStateToProps = ({ state: { player } }) => ({ player });
const mapDispatchToProps = dispatch => ({
  setShuffle: (player, shuffleActive) =>
    dispatch(setShuffle(player, shuffleActive))
});

function PlayerButtonShuffle({
  player,
  setShuffle,
  colors = {
    click: "green",
    hover: "orange",
    idle: "blue"
  },
  ...other
}) {
  const { color, setHovering, setClicked, clicked } = useColorEffect(
    colors,
    null,
    null
  );
  return (
    <div
      className="player-shuffle-button"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      {...other}
    >
      <Shuffle
        {...{ color }}
        onClick={() => {
          setClicked(!clicked);
          setShuffle(player, !clicked);
        }}
      />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerButtonShuffle);
