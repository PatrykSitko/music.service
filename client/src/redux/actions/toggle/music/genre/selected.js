import { TOGGLE_MUSIC_GENRE_SELECTED } from "../../../types";

export default (currentMusicState, letter, genre) => {
  let isSelected = false;
  const genresCopy = { ...currentMusicState.genres };
  genresCopy[letter] = genresCopy[letter].map(({ title, selected, ...other }) =>
    title === genre
      ? {
          title,
          ...other,
          selected: selected ? (isSelected = false) : (isSelected = true)
        }
      : { title, selected, ...other }
  );
  const currentGenresCopy = [...currentMusicState.current.genres];
  if (currentGenresCopy.includes(genre) && !isSelected) {
    currentGenresCopy.splice(currentGenresCopy.indexOf(genre), 1);
  } else if (!currentGenresCopy.includes(genre) && isSelected) {
    currentGenresCopy.push(genre);
  }
  return {
    type: TOGGLE_MUSIC_GENRE_SELECTED,
    payload: {
      music: {
        ...currentMusicState,
        current: { ...currentMusicState.current, genres: currentGenresCopy },
        genres: { ...genresCopy }
      }
    }
  };
};
