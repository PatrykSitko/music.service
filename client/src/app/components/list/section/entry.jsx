import React from "react";
import "../list.scss";

function ListSectionEntry({
  title,
  image,
  otherProps,
  onClick,
  className,
  ...other
}) {
  return (
    <div
      className={`entry${className ? ` ${className}` : ""}${
        otherProps.selected ? " selected" : ""
      }`}
      onClick={event => onClick({ event, title, image, ...otherProps })}
      {...other}
    >
      <img src={image} alt={title} />
      <div className="title">{title}</div>
    </div>
  );
}

export default ListSectionEntry;
