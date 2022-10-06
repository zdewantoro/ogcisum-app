import React, { useState } from "react";
import {
  toneObject,
  toneTransport,
  tonePartDrums,
  tonePartGuitar,
  tonePartPiano,
  tonePartFrenchHorn,
} from "../../data/instruments";

export default function Preview({
  // toneObject,
  // toneTransport,
  // tonePartGuitar,
  // tonePartPiano,
  // tonePartFrenchHorn,
  // tonePartDrums,
  sequences,
  currentInstrument,
}) {
  const [previewing, setPreviewing] = useState(false);
  function handleButtonClick() {
    toneObject.start();
    toneTransport.stop();

    toneTransport.cancel();

    console.log(sequences);

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
      }, 16 / 4);
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
          console.log(currentInstrument);
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
    <button onClick={handleButtonClick} className="normal-button">
      {previewing ? "Stop Previewing" : "Preview"}
    </button>
  );
}
