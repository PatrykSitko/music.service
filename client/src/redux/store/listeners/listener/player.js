import switchNext from "../../../actions/player/switch/next";
import setTime from "../../../actions/player/set/time";
import setRequestedTime from "../../../actions/player/set/requested/time";

export default ({ getState, dispatch }) => {
  let player = document.createElement("audio");
  player.onended = () => {
    player = document.createElement("audio");
    dispatch(switchNext(getState().state.player));
  };
  player.onloadeddata = () =>
    dispatch(
      setTime(getState().state.player, player.currentTime, player.duration)
    );
  setInterval(() => {
    const {
      volume,
      muted,
      playing,
      song: {
        time: { requested, now, total },
        current
      }
    } = getState().state.player;
    if (now !== player.currentTime || total !== player.duration) {
      dispatch(
        setTime(getState().state.player, player.currentTime, player.duration)
      );
    }
    if (requested && player.currentTime !== requested) {
      player.currentTime = requested;
      dispatch(setRequestedTime(getState().state.player, null));
    }
    if (player.src !== current.sound) {
      player.src = current.sound;
    } else if (playing) {
      player.play();
    } else if (!playing) {
      player.pause();
    }
    player.muted = muted;
    if (!isNaN(volume) && player.volume !== volume) {
      player.volume = volume;
    }
  }, 1);
};
