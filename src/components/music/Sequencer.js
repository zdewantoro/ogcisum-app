import React from "react";
import Bars from "./Bars";

/**
 * This function is use as a component to combine the bars and the title in on container
 * @param {String} title title used as a name for the note {A, B, C, D, E, F, G}
 * @param {Tone} toneObject
 * @param {boolean[]} sequence An array of sequece that consist of true and false according to the bar id
 * @param {String} curInstrument The choosen instrument wether it is a guitar, piano, french horn, or drums
 * @param {id} onBarClicked A function to handle when the bar is clicked to be passed on the home page
 * @returns title and bars
 */

export default function Sequencer({
  title,
  toneObject,
  note,
  sequence,
  curInstrument,
  onBarClicked,
}) {
  return (
    <div className="sequence-container">
      <p>{title}</p>
      <div className="sequencer">
        <Bars
          sequence={sequence}
          onBarClicked={onBarClicked}
          toneObject={toneObject}
          note={note}
          curInstrument={curInstrument}
        />
      </div>
    </div>
  );
}
