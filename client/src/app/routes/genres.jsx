import React, { useEffect } from "react";
import { connect } from "react-redux";
import Genres from "../components/list";
import toggleMusicGenreSelected from "../../redux/actions/toggle/music/genre/selected";
import requestGenres from "../../io/request/genres";

const mapsStateToProps = ({ state }) => ({ state });
const mapDispatchToProps = dispatch => ({
  dispatch,
  toggleMusicGenreSelected: (music, letter, genre) =>
    dispatch(toggleMusicGenreSelected(music, letter, genre))
});

function GenresRoute({ dispatch, state, toggleMusicGenreSelected }) {
  const { music } = state;
  useEffect(() => console.log(music), [music]);
  return (
    <div>
      <Genres
        entryType="big"
        sections={music.genres}
        onClick={({ title, letter }) => {
          toggleMusicGenreSelected(music, letter, title);
        }}
        onRequest={({ letter }) => requestGenres(state, dispatch, letter)}
      />
    </div>
  );
}

export default connect(mapsStateToProps, mapDispatchToProps)(GenresRoute);
