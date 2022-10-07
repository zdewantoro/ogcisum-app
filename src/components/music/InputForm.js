import React from "react";
import Button from "../template/Button";
import Preview from "./Preview";

/**
 * This function is used as a component for user input and get button preview and save the data
 * Reference: https://mattluscombe.notion.site/Week-8-Contact-d2f5e272d7684d16b81996a20ac87027
 * @param {String} title title used as a name from the database accoring to the id
 * @param {String} setTitle set an updated title to be changed on save
 * @param {Tone} toneObject
 * @param {Tone} toneTransport
 * @param {boolean[]} sequence An array of sequece that consist of true and false according to the bar id
 * @param {Tone} tonePartGuitar
 * @param {Tone} tonePartPiano
 * @param {Tone} tonePartFrenchHorn
 * @param {Tone} tonePartDrums
 * @param {String} curInstrument The choosen instrument wether it is a guitar, piano, french horn, or drums
 * @param {id} handleSubmit A function to handle when the bar is clicked save the data
 * @returns return a title, preview the music that is true, and saving the data on click the button save
 */

export default function InputForm({
  title,
  setTitle,
  toneObject,
  toneTransport,
  sequences,
  tonePartGuitar,
  tonePartPiano,
  tonePartFrenchHorn,
  tonePartDrums,
  currentInstrument,
  handleSubmit,
}) {
  return (
    <div className="border-dark">
      <div className="input-form">
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className="sample-card-right">
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
          <Button onClick={handleSubmit} type="normal">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
