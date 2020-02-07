import { PLAYER_SHUFFLE } from "../../types";

export default (currentPlayer, shuffleActive) => ({
  type: PLAYER_SHUFFLE,
  payload: {
    player: {
      ...currentPlayer,
      shuffle:
        typeof shuffleActive === "boolean"
          ? shuffleActive
          : currentPlayer.shuffle
    }
  }
});
