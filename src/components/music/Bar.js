import React from "react";

/**
 * This function handle the bar when clicked and will send the id and change the style on the
 * clicked bar
 * Reference: https://mattluscombe.notion.site/Week-8-Contact-d2f5e272d7684d16b81996a20ac87027
 * @param {id} barId id used to play the sound according to the time
 * @param {boolean} barEnabled when the bar is clicked the style will change
 * @param {id} handleBarClick handle the changing function according to the id
 * @returns return id and changed styling
 */

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
