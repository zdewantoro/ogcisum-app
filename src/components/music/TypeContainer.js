import React from "react";
import TypeButton from "./TypeButton";

/**
 * * This function is use as a component to combine the bars and the title in on container
 * @param {String} onInstrumentClicked Change the state of the instrument to be passed on the editing page
 * @param {String} currentInstrument The choosen instrument wether it is a guitar, piano, french horn, or drums
 * @returns type of instrument and styling on the button
 */

export default function TypeContainer({
  onInstrumentClicked,
  currentInstrument,
}) {
  return (
    <div className="sequence-container">
      <p>Type</p>
      <TypeButton
        onInstrumentClicked={onInstrumentClicked}
        currentInstrument={currentInstrument}
      />
    </div>
  );
}
