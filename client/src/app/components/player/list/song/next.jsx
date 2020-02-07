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

function ListSongsNext({ list }) {
  console.log(list);
  return (
    <List>
      {list.next.map(({ title, artist }) => (
        <ListEntry {...{ title, artist }} />
      ))}
    </List>
  );
}

export default connect(mapStateToProps)(ListSongsNext);
