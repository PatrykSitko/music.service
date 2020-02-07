import React from "react";
import { connect } from "react-redux";
import "../style.scss";

const mapStateToProps = ({
  state: {
    player: {
      song: { time }
    }
  }
}) => ({ time });
function PlayerDisplayTime({ time: { now, total }, ...other }) {
  delete other.dispatch;
  let [nowMinutes, nowSeconds] = `${now / 60}`.split(".");
  let [totalMinutes, totalSeconds] = `${total / 60}`.split(".");
  nowSeconds = `${60 * parseFloat(`0.${nowSeconds}`)}`.split(".")[0];
  totalSeconds = `${60 * parseFloat(`0.${totalSeconds}`)}`.split(".")[0];
  return (
    <div className="player-display-time" {...other}>{`${
      nowMinutes > 0
        ? `${nowMinutes.length === 1 ? `0${nowMinutes}` : nowMinutes}:`
        : "0:"
    }${nowSeconds.length === 1 ? `0${nowSeconds}` : nowSeconds} / ${
      totalMinutes > 0
        ? `${totalMinutes.length === 1 ? `0${totalMinutes}` : totalMinutes}:`
        : "0"
    }${totalSeconds.length === 1 ? `0${totalSeconds}` : totalSeconds}`}</div>
  );
}

export default connect(mapStateToProps)(PlayerDisplayTime);
