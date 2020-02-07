import React from "react";
import { push } from "redux-first-routing";
import { connect } from "react-redux";
import "./button.scss";

const mapStateToProps = ({ router: { pathname } }) => ({ pathname });
const mapDispatchToProps = dispatch => ({
  changePath: href => dispatch(push(href))
});

function NavigationButton({
  title,
  changePath,
  onClick,
  href,
  className,
  pathname,
  ...other
}) {
  return (
    <div
      className={`navigation-button${className ? ` ${className}` : ""}${
        href === pathname ? " selected" : ""
      }`}
      {...other}
      onClick={event => {
        if (typeof onClick === "function") {
          onClick(event);
        }
        if (typeof href === "string" && pathname !== href) {
          changePath(href);
        }
      }}
    >
      {title}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationButton);
