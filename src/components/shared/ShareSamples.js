import React from "react";
import Preview from "../music/Preview";

/**
 * This function is used as a component card for user previewing the music and get the data from database
 * @param {String} name title used as a name from the database accoring to the id
 * @param {String} date date used as a name from the database accoring to the id
 * @param {Tone} toneObject
 * @param {Tone} toneTransport
 * @param {boolean[]} sequence An array of sequece that consist of true and false according to the bar id
 * @param {Tone} tonePartGuitar
 * @param {Tone} tonePartPiano
 * @param {Tone} tonePartFrenchHorn
 * @param {Tone} tonePartDrums
 * @param {String} curInstrument The choosen instrument wether it is a guitar, piano, french horn, or drums
 * @returns return a title of the samples, created or updated time of the samples and preview the saved music
 */

export default function ShareSamples({
  name,
  date,
  toneObject,
  toneTransport,
  sequences,
  tonePartGuitar,
  tonePartPiano,
  tonePartFrenchHorn,
  tonePartDrums,
  currentInstrument,
}) {
  return (
    <div className="border-dark">
      <div className="rowbox-sample-container">
        <h3>{name}</h3>
        <p className="p-darker">{date}</p>
      </div>
      <div className="rowbox-sample-container">
        <Preview
          toneObject={toneObject}
          toneTransport={toneTransport}
          tonePartGuitar={tonePartGuitar}
          tonePartPiano={tonePartPiano}
          tonePartFrenchHorn={tonePartFrenchHorn}
          tonePartDrums={tonePartDrums}
          sequences={sequences}
          currentInstrument={currentInstrument}
        />
      </div>
    </div>
  );
}
