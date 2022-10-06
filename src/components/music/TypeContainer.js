import React from "react";
import TypeButton from "./TypeButton";

export default function TypeContainer({
  onInstrumentClicked,
  currentInstrument,
}) {
  return (
    <div className="wrapper">
      <div className="rowbox-sample-container">
        <p>Type</p>
      </div>
      <div className="rowbox-sample-container">
        <TypeButton
          onInstrumentClicked={onInstrumentClicked}
          currentInstrument={currentInstrument}
        />
      </div>
    </div>
  );
}
