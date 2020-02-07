import React from "react";
import { connect } from "react-redux";
import List, { ListEntry } from "../";

const mapStateToProps = ({
  state: {
    player: {
      song: { list }
    }
  }
}) => ({ list });

function ListSongsPrevious({ list }) {
  return (
    <List>
      {list.previous.map(({ title, artist }) => (
        <ListEntry {...{ title, artist }} />
      ))}
    </List>
  );
}

export default connect(mapStateToProps)(ListSongsPrevious);
