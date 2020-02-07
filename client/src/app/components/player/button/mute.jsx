import React from "react";
import { connect } from "react-redux";
import "../style.scss";
import Muted from "./svg/muted";
import Pause from "./svg/pause";
import setMuted from "../../../../redux/actions/player/set/muted";
import { useColorEffect } from "./effects";

const mapStateToProps = ({ state: { player } }) => ({ player });
const mapDispatchToProps = dispatch => ({
  setMuted: (player, isMuted) => dispatch(setMuted(player, isMuted))
});

function PlayerButtonMute({
  useClearMouseExitedState,
  player,
  setMuted,
  colors = {
    click: "green",
    hover: "orange",
    idle: "blue"
  }
}) {
  const { color, setHovering, setClicked } = useColorEffect(colors, () => {
    setTimeout(() => setMuted(player, !player.muted), 150);
  });
  return (
    <div
      className="player-mute-button"
      onMouseEnter={() => {
        setHovering(true);
        if (typeof useClearMouseExitedState[1] === "function") {
          useClearMouseExitedState[1](false);
        }
      }}
      onMouseLeave={() => setHovering(false)}
    >
      {player.muted ? (
        <Pause {...{ color }} onClick={setClicked} />
      ) : (
        <Muted {...{ color }} onClick={setClicked} />
      )}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerButtonMute);
