import React from "react";

/**
 * This function is used as a component to be used on the page so that the content is inside the wrapper
 * @param {*} children the content of the code
 * @returns a wrapper
 */

export const Wrapper = ({ children, className = "" }) => {
  return <div className={`wrapper ${className}`}>{children}</div>;
};
