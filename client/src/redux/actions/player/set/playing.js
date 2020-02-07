import { PLAYER_PLAYING } from "../../types";

export default (playerState, isPlaying) => ({
  type: PLAYER_PLAYING,
  payload: {
    player: { ...playerState, playing: isPlaying }
  }
});
