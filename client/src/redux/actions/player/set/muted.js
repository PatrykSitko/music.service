import { PLAYER_MUTED } from "../../types";

export default (playerState, isMuted) => ({
  type: PLAYER_MUTED,
  payload: {
    player: { ...playerState, muted: isMuted }
  }
});
