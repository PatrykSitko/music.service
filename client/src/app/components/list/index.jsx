import React from "react";
import Section from "./section";
import "./list.scss";

export const entryTypes = {
  big: "big"
};
function List({
  sections = {
    a: [
      {
        title: "title",
        image:
          "https://media.gettyimages.com/photos/colorful-powder-explosion-in-all-directions-in-a-nice-composition-picture-id890147976?s=612x612"
      }
    ]
  },
  onClick,
  onRequest,
  entryType,
  ...other
}) {
  return (
    <div className="list" {...other}>
      {Object.entries(sections).map(([letter, section], index) =>
        section.length > 0 ? (
          <Section
            key={index}
            {...{ letter, section, onClick, onRequest, entryType }}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default List;
