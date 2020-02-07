import React, { useState, useEffect } from "react";
import ConfirmButton from "../confirm";
import { connect } from "react-redux";
import addLink from "../../../../redux/actions/add/link";
import "./link.scss";

const mapDispatchToProps = dispatch => ({
  addLink: (state, link) => dispatch(addLink(state, link))
});
const mapStateToProps = state => ({ state });

function AddLink({ addLink, state }) {
  const [link, setLink] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  useEffect(() => {
    if (confirmed && link !== "") {
      setLink("");
      setConfirmed(false);
      addLink(state.state, link);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link, setLink, addLink, confirmed, setConfirmed]);
  return (
    <div className="add-link-wrapper">
      <input
        className="add-link-input"
        onChange={data => setLink(data.target.value)}
        key="input"
        value={link}
      />
      <ConfirmButton
        key={"confirm-button"}
        useConfirmState={[confirmed, setConfirmed]}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLink);
