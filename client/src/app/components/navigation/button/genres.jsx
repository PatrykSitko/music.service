import React from "react";
import NavigationButton from ".";
import "./button.scss";

function NavigationButtonGenres({ onClick, ...other }) {
  return (
    <NavigationButton
      {...{ title: "Genres", href: "/genres", onClick, ...other }}
    />
  );
}

export default NavigationButtonGenres;
