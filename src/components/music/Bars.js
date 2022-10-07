import React from "react";
import Bar from "./Bar";
import { guitar, piano, french_horn, drums } from "../../data/instruments";

/**
 * This function is used to trigger the note when the user clicked on the bar
 * Reference: https://mattluscombe.notion.site/Week-8-Contact-d2f5e272d7684d16b81996a20ac87027
 * @param {boolean[]} sequence An array of sequece that consist of true and false according to the bar id
 * @param {Tone} toneObject
 * @param {String} note The sound according to the file
 * @param {String} curInstrument The choosen instrument wether it is a guitar, piano, french horn, or drums
 * @param {boolean} onBarClicked A function to handle when the bar is clicked
 * @returns return barId and enabling the bar with sound accoding to the note
 */

export default function Bars({
  sequence,
  toneObject,
  note,
  curInstrument,
  onBarClicked,
}) {
  function handleBarClick(bar, note, idx) {
    const now = toneObject.now();

    onBarClicked(idx);
    switch (curInstrument) {
      case "piano":
        piano.triggerAttackRelease(note, "8n", now);
        break;
      case "guitar":
        guitar.triggerAttackRelease(note, "8n", now);
        break;
      case "frenchHorn":
        french_horn.triggerAttackRelease(note, "8n", now);
        break;
      case "drums":
        drums.triggerAttackRelease(note, "8n", now);
        break;
      default:
        break;
    }
  }

  return sequence.map((bar, idx) => (
    <Bar
      key={idx}
      barEnabled={bar}
      handleBarClick={() => handleBarClick(bar, note, idx)}
    />
  ));
}
