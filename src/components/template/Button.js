import React from "react";
import { Link } from "react-router-dom";

/**
 * This function is used as a component to be used on any button on all of the page to differ between the styling and linking to the page
 * @param {Boolean} isLink whether the button is linked to other page
 * @param {String} type type of the button whether it is a normal button or the inverted button
 * @param {*} children the content of the button
 * @param {String} to the destination of the link
 * @param {State} state
 * @param {*} ...rest the rest props that can be added
 * @returns a button
 */

const Button = ({ isLink, type, children, to = "", state, ...rest }) => {
  return isLink ? (
    <Link
      to={to}
      state={state}
      className={`base-button ${
        type === "normal" ? "inverted-button" : "normal-button"
      }`}
      {...rest}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`base-button ${
        type === "normal" ? "inverted-button" : "normal-button"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
