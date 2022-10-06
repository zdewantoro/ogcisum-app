import React from "react";

export default function Bar({ barID, barEnabled, handleBarClick }) {
  function barSelected() {
    if (barEnabled) {
      return "selected";
    }
    return "";
  }

  return (
    <div
      className={`bar bar-${barID} ${barSelected()}`}
      onClick={handleBarClick}
    >
      {barID}
    </div>
  );
}
