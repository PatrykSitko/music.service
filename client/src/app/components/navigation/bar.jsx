import React from "react";
import "./bar.scss";

function NavigationBar({ children, ...other }) {
  return [
    <div key="nav-bar" className="navigation-bar" {...other}>
      {children}
    </div>,
    <div key="nav-bar-filler" className="navigation-bar-filler" />
  ];
}

export default NavigationBar;
