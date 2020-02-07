import React from "react";
import Entry from "./entry";
import "../list.scss";

function ListSection({
  letter,
  section,
  onClick,
  onRequest,
  entryType: entryClassName,
  ...other
}) {
  let entries = section;
  if (
    typeof entries !== "object" ||
    !(entries.constructor && entries.constructor.name === "Array")
  ) {
    entries = [entries];
  }
  return (
    <div className="section" {...other}>
      <div className="container-letter">
        <div className="letter">{letter}</div>
      </div>
      <div className="container-entries">
        {entries.map(({ title, image, ...other }) => (
          <Entry
            {...{
              key: `${title}${image}`,
              title,
              image,
              otherProps: { letter, ...other },
              className: entryClassName,
              onClick
            }}
          />
        ))}
        <Entry
          {...{
            title: "More",
            image: "#",
            className: entryClassName,
            otherProps: { letter, ...other },
            onClick: onRequest
          }}
        />
      </div>
    </div>
  );
}

export default ListSection;
