import { useState, useEffect } from "react";

export function useColorEffect(
  colors = {
    click: "green",
    hover: "orange",
    idle: "blue"
  },
  onClick = () => {},
  clickedTimeout = 300 /*Sets clicked back to false. */
) {
  const [color, setColor] = useState(colors.idle);
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked && color !== colors.click) {
      setColor(colors.click);
      if (typeof onClick === "function") {
        onClick();
      }
      if (typeof clickedTimeout === "number") {
        setTimeout(() => setClicked(false), clickedTimeout);
      }
    } else if (!clicked) {
      if (hovering && color !== colors.hover) {
        setColor(colors.hover);
      } else if (!hovering && color !== colors.idle) {
        setColor(colors.idle);
      }
    }
  }, [
    clicked,
    color,
    colors,
    hovering,
    onClick,
    setHovering,
    setClicked,
    clickedTimeout
  ]);
  return {
    color,
    hovering,
    clicked,
    setColor,
    setHovering,
    setClicked
  };
}
