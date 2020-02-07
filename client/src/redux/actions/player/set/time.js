import { SET_TIME } from "../../types";

export default (playerState, now, total) => ({
  type: SET_TIME,
  payload: {
    player: {
      ...playerState,
      song: {
        ...playerState.song,
        time: {
          ...playerState.song.time,
          now: typeof now === "number" ? now : playerState.song.time.now,
          total: typeof total === "number" ? total : playerState.song.time.total
        }
      }
    }
  }
});
