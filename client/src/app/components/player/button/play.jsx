import React from "react";
import { connect } from "react-redux";
import "../style.scss";
import Play from "./svg/play";
import Pause from "./svg/pause";
import setPlaying from "../../../../redux/actions/player/set/playing";
import { useColorEffect } from "./effects";

const mapStateToProps = ({ state: { player } }) => ({ player });
const mapDispatchToProps = dispatch => ({
  setPlaying: (player, isPlaying) => dispatch(setPlaying(player, isPlaying))
});

function PlayerButtonPlay({
  player,
  setPlaying,
  colors = {
    click: "green",
    hover: "orange",
    idle: "blue"
  },
  ...other
}) {
  const { color, setHovering, setClicked } = useColorEffect(colors, () => {
    setTimeout(() => setPlaying(player, !player.playing), 150);
  });
  return (
    <div
      className="player-play-button"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      {...other}
    >
      {player.playing ? (
        <Pause {...{ color }} onClick={setClicked} />
      ) : (
        <Play {...{ color }} onClick={setClicked} />
      )}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerButtonPlay);
