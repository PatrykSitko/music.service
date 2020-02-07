import React from "react";
import NavigationButton from ".";
import "./button.scss";

function NavigationButtonArtists({ onClick, ...other }) {
  return (
    <NavigationButton
      {...{ title: "Artists", href: "/artists", onClick, ...other }}
    />
  );
}

export default NavigationButtonArtists;
