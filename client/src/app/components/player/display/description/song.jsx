import React from "react";
import { connect } from "react-redux";
import "../../style.scss";

const mapStateToProps = ({
  state: {
    player: {
      song: { current }
    }
  }
}) => ({ song: current });

function PlayerDisplayDescriptionSong({ song: { image, title, artist } }) {
  return (
    <div className="player-display-description-song container">
      <img
        className="player-display-description-song image"
        src={image}
        alt="cover"
      />
      <div className="player-display-description-song title artist">
        {title}
        <br />
        {artist}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(PlayerDisplayDescriptionSong);
