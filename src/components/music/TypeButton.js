import React from "react";

/**
 * This function is used to change the state of the current choosen instrument
 * Change the style according to the instrument
 * @param {String} onInstrumentClicked change the state of the instrument
 * @param {String} currentInstrument The choosen instrument wether it is a guitar, piano, french horn, or drums
 * @returns instrument and styling on the button
 */

export default function TypeButton({ onInstrumentClicked, currentInstrument }) {
  return (
    <>
      <button
        className={`type-button ${
          currentInstrument === "piano" ? "selected" : "not-selected"
        }`}
        onClick={() => onInstrumentClicked("piano")}
      >
        Piano
      </button>
      <button
        className={`type-button ${
          currentInstrument === "frenchHorn" ? "selected" : "not-selected"
        }`}
        onClick={() => onInstrumentClicked("frenchHorn")}
      >
        French Horn
      </button>

      <button
        className={`type-button ${
          currentInstrument === "guitar" ? "selected" : "not-selected"
        }`}
        onClick={() => onInstrumentClicked("guitar")}
      >
        Guitar
      </button>

      <button
        className={`type-button ${
          currentInstrument === "drums" ? "selected" : "not-selected"
        }`}
        onClick={() => onInstrumentClicked("drums")}
      >
        Drums{" "}
      </button>
    </>
  );
}
