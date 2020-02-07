import io from "../";
import addMusicGenres from "../../redux/actions/add/music/genres";
import setRequestStateMusicGenres from "../../redux/actions/set/requestState/music/genres";

export default function requestGenres(currentState, dispatch, letter = "*") {
  io.emit("request-genres", {
    letter,
    current: currentState.music.current,
    genres: currentState.music.genres
  });
  console.log(currentState);
  dispatch(
    setRequestStateMusicGenres(currentState, { [letter]: { added: false } })
  );
}
export const connector = ({ getStore, dispatch }) => {
  io.on("requested-genres", ({ genres, letter }) => {
    dispatch(
      setRequestStateMusicGenres(getStore().state, {
        [letter]: { added: true }
      })
    );
    dispatch(addMusicGenres(genres));
  });
};
