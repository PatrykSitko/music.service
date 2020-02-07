import React from "react";
import "./confirm.scss";

function ConfirmButton({ useConfirmState, className, ...other }) {
  return (
    <div
      className={className ? `confirm-button ${className}` : "confirm-button"}
      onClick={useConfirmState[1]}
      {...other}
    >
      Confirm
    </div>
  );
}

export default ConfirmButton;
