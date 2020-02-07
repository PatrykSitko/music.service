import React from "react";
import NavigationButton from ".";
import "./button.scss";

function NavigationButtonRegions({ onClick, ...other }) {
  return (
    <NavigationButton
      {...{ title: "Regions", href: "/regions", onClick, ...other }}
    />
  );
}

export default NavigationButtonRegions;
