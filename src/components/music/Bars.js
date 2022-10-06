import React from "react";
import Bar from "./Bar";
import { guitar, piano, french_horn, drums } from "../../data/instruments";

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
