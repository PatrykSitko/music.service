import React from "react";
import "./style.scss";

function ListEntry({ title, artist, ...other }) {
  return (
    <div className="list-entry" {...other}>
      <div className="list-entry-title">{title}</div>
      <div className="list-entry-artist">{artist}</div>
    </div>
  );
}

export default ListEntry;
