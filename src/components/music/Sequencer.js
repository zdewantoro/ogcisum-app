import React from "react";
import Bars from "./Bars";

export default function Sequencer({
  title,
  toneObject,
  note,
  sequence,
  curInstrument,
  onBarClicked,
}) {
  return (
    <>
      <div className="wrapper">
        <div className="rowbox-sample-container">
          <p>{title}</p>
        </div>
        <div className="rowbox-sample-container">
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
      </div>
    </>
  );
}
