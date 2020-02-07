import { SET_REQUEST_STATE_MUSIC_GENRES } from "../../../types";

export default (currentState, newMusicGenresRequestState) => ({
  type: SET_REQUEST_STATE_MUSIC_GENRES,
  payload: {
    requestState: {
      ...currentState.requestState,
      requestState: {
        ...currentState.requestState,
        music: {
          ...currentState.requestState.music,
          genres: {
            ...(() => {
              const updatedValues = {
                ...currentState.requestState.music.genres
              };
              for (let letter in newMusicGenresRequestState) {
                if (typeof updatedValues[letter] !== "object") {
                  updatedValues[letter] = {};
                }
                for (let [key, value] of Object.entries(
                  newMusicGenresRequestState[letter]
                )) {
                  if (updatedValues[letter][key] !== value) {
                    updatedValues[letter][key] = value;
                  }
                }
              }
              return updatedValues;
            })()
          }
        }
      }
    }
  }
});
