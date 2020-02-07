import { ADD_GENRES } from "../../types";

export default (currentMusicState, genres) => {
  const genresCopy = { ...currentMusicState.genres };
  for (let letter of Object.keys(genres)) {
    for (let genre of genres[letter]) {
      if (typeof genresCopy[letter] !== "object") {
        genresCopy[letter] = [];
      }
      if (!genresCopy[letter].includes(genre)) {
        genresCopy[letter].push(genre);
      }
    }
  }
  return {
    type: ADD_GENRES,
    payload: { music: { ...currentMusicState, genres: genresCopy } }
  };
};
