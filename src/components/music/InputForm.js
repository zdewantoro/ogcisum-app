import React from "react";
import Preview from "./Preview";

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
        <button className="button-edit" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}
