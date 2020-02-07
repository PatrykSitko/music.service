import { SET_VOLUME } from "../../types";

export default (playerState, volume) => ({
  type: SET_VOLUME,
  payload: {
    player: {
      ...playerState,
      volume:
        typeof volume === "number"
          ? volume > 1
            ? 1
            : volume < 0
            ? 0
            : volume
          : playerState.volume
    }
  }
});
