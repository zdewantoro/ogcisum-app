import React from "react";
import { useState } from "react";

/**
 * This function is used to change the state of the current choosen shared on not shared button
 * Change the style according to the shared button
 * @returns state of shared music and styling on the button
 */

export default function SharedButton() {
  const [selected, setSelected] = useState("");
  return (
    <div style={{ display: "flex" }}>
      <button
        className={` type-button ${
          selected === "notShared" ? "selected" : "not-selected"
        }`}
        onClick={() => setSelected("notShared")}
      >
        Not Shared
      </button>

      <button
        className={` type-button ${
          selected === "shared" ? "selected" : "not-selected"
        }`}
        onClick={() => setSelected("shared")}
      >
        Shared
      </button>
    </div>
  );
}
