import React from "react";
import { connect } from "react-redux";
import "./song.scss";

const mapStateToProps = ({
  state: {
    player: {
      song: { current }
    }
  }
}) => ({ song: current });

function FrameImageCurrentSong({ song }) {
  return <img src={song.image} alt={song.title} />;
}

export default connect(mapStateToProps)(FrameImageCurrentSong);
