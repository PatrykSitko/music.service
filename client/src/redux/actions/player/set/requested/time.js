import { SET_REQUESTED_TIME } from "../../../types";

export default (playerState, requested) => ({
  type: SET_REQUESTED_TIME,
  payload: {
    player: {
      ...playerState,
      song: {
        ...playerState.song,
        time: {
          ...playerState.song.time,
          requested: requested
        }
      }
    }
  }
});
