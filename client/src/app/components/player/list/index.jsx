import React from "react";
import "./style.scss";
export { default as ListEntry } from "./entry";

function List({ children, className, ...other }) {
  return (
    <div className={`list${className ? ` ${className}` : ""}`} {...other}>
      {children}
    </div>
  );
}

export default List;
