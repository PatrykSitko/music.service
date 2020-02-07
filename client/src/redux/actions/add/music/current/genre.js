import { CURRENT_GENRE } from "../../../types";

export default (currentMusicState, genre) => ({
  type: CURRENT_GENRE,
  payload: {
    music: {
      ...currentMusicState,
      current: {
        ...currentMusicState.current,
        genres: [...currentMusicState.current.genres, genre]
      }
    }
  }
});
