import React, { useState } from "react";
import Button from "../template/Button";

/**
 * This function is use to start and stop a saved music on the sequence
 * Change the button when the preview start and revert it back when the music has finished
 * Reference: https://mattluscombe.notion.site/Week-8-Contact-d2f5e272d7684d16b81996a20ac87027
 * @param {Tone} toneObject
 * @param {Tone} toneTransport
 * @param {boolean[]} sequence An array of sequece that consist of true and false according to the bar id
 * @param {Tone} tonePartGuitar
 * @param {Tone} tonePartPiano
 * @param {Tone} tonePartFrenchHorn
 * @param {Tone} tonePartDrums
 * @param {String} curInstrument The choosen instrument wether it is a guitar, piano, french horn, or drums
 * @returns change the button when preview is clicked and start the music
 */

export default function Preview({
  toneObject,
  toneTransport,
  tonePartGuitar,
  tonePartPiano,
  tonePartFrenchHorn,
  tonePartDrums,
  sequences,
  currentInstrument,
}) {
  const [previewing, setPreviewing] = useState(false);
  function handleButtonClick() {
    toneObject.start();
    toneTransport.stop();
    toneTransport.cancel();

    tonePartGuitar.clear();
    tonePartDrums.clear();
    tonePartFrenchHorn.clear();
    tonePartPiano.clear();

    if (previewing) {
      setPreviewing(false);
    } else {
      setPreviewing(true);
      toneTransport.schedule(() => {
        console.log("Preview stopped automatically.");
        setPreviewing(false);
      }, 16 / 2);
      sequences
        .flatMap((seq) => {
          const key = Object.keys(seq)[0];
          return seq[key].map((x, idx) => ({
            note: `${key}3`,
            id: idx,
            isEnabled: x,
          }));
        })
        .filter((seq) => seq.isEnabled)
        .forEach((bar) => {
          switch (currentInstrument) {
            case "guitar":
              tonePartGuitar.add(bar.id / 2, bar.note);
              break;
            case "piano":
              tonePartPiano.add(bar.id / 2, bar.note);
              break;
            case "frenchHorn":
              tonePartFrenchHorn.add(bar.id / 2, bar.note);
              break;
            case "drums":
              tonePartDrums.add(bar.id / 2, bar.note);
              break;
            default:
              break;
          }
        });
      toneTransport.start();
    }
  }

  return (
    <Button onClick={handleButtonClick} type="inverted">
      {previewing ? "Stop Previewing" : "Preview"}
    </Button>
  );
}
