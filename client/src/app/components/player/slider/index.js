import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "../style.scss";

const mapStateToProps = ({ state: { mouse, window } }) => ({
  mouse,
  window
});

function PlayerSlider({
  mouse,
  window,
  hidden,
  className,
  useSliderRectState,
  useSliderNobRectState,
  onMousedownNob,
  reactOnClassNames = [],
  children,
  ...other
}) {
  delete other.dispatch;
  const [sliderRef, sliderNobRef] = [useRef(), useRef()];
  const [[sliderRect, setSliderRect], [sliderNobRect, setSliderNobRect]] = [
    useSliderRectState,
    useSliderNobRectState
  ];
  useSetRect(sliderRef, sliderRect, setSliderRect, window);
  useSetRect(sliderNobRef, sliderNobRect, setSliderNobRect, window);
  useSliderNobPosition(
    onMousedownNob,
    hidden,
    className,
    mouse,
    reactOnClassNames,
    setSliderNobRect,
    sliderNobRect,
    sliderRect,
    window
  );
  return (
    <div
      ref={sliderRef}
      className={`player-slider${className ? ` ${className}` : ""}${
        hidden ? " hidden" : ""
      }`}
      {...other}
    >
      <div
        ref={sliderNobRef}
        style={{
          marginLeft:
            sliderNobRect.x - sliderRect.x < 0
              ? 0
              : sliderNobRect.x + sliderNobRect.width >
                sliderRect.x + sliderRect.width
              ? sliderRect.width - sliderNobRect.width
              : sliderNobRect.x - sliderRect.x
        }}
        className={`player-slider-nob${className ? ` ${className}` : ""}`}
      />
      <div
        className={`player-slider-filler${className ? ` ${className}` : ""}`}
        style={{
          width:
            sliderRect.x +
              sliderRect.width -
              sliderNobRect.x -
              sliderNobRect.width <
            sliderRect.width - sliderNobRect.width
              ? sliderRect.x +
                sliderRect.width -
                sliderNobRect.x -
                sliderNobRect.width
              : sliderRect.width - sliderNobRect.width
        }}
      >
        {children}
      </div>
    </div>
  );
}

function useSetRect(ref, rect, setRect, window) {
  const identical = (a = {}, b = {}) => {
    return (
      a.x === b.x &&
      a.y === b.y &&
      a.width === b.width &&
      a.height === b.height &&
      a.top === b.top &&
      a.bottom === b.bottom &&
      a.left === b.left &&
      a.right === b.right
    );
  };
  useEffect(() => {
    if (ref) {
      const slider = ReactDOM.findDOMNode(ref.current).getBoundingClientRect();
      if (!identical(slider, rect)) {
        setRect(slider);
      }
    }
  }, [setRect, rect, ref, window]);
}

function useSliderNobPosition(
  onMousedownNob,
  hidden,
  className,
  mouse,
  reactOnClassNames,
  setSliderNobRect,
  sliderNobRect,
  sliderRect,
  window
) {
  useEffect(() => {
    if (
      !hidden &&
      mouse.down &&
      mouse.down.button === 0 &&
      mouse.down.target &&
      (mouse.down.target.className ===
        `player-slider-nob${className ? ` ${className}` : ""}` ||
        mouse.down.target.className ===
          `player-slider${className ? ` ${className}` : ""}` ||
        mouse.down.target.className ===
          `player-slider-filler${className ? ` ${className}` : ""}` ||
        reactOnClassNames.includes(mouse.down.target.className))
    ) {
      const { y, width, height, left, right, top, bottom } = sliderNobRect;
      setSliderNobRect({
        y,
        width,
        height,
        left,
        right,
        top,
        bottom,
        x: mouse.move.pageX - width / 2
      });
      if (typeof onMousedownNob === "function") {
        onMousedownNob({
          y,
          width,
          height,
          left,
          right,
          top,
          bottom,
          x: mouse.move.pageX - width / 2
        });
      }
    }
  }, [
    hidden,
    mouse,
    setSliderNobRect,
    sliderNobRect,
    sliderRect,
    window,
    reactOnClassNames,
    className,
    onMousedownNob
  ]);
}

export default connect(mapStateToProps)(PlayerSlider);
