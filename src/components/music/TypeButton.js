import React from "react";

export default function TypeButton({ onInstrumentClicked, currentInstrument }) {
  return (
    <div className="wrapper">
      <div className="shared-container ">
        <button
          className={
            currentInstrument === "piano" ? "selected" : "not-selected"
          }
          onClick={() => onInstrumentClicked("piano")}
        >
          Piano
        </button>
      </div>
      <div className="shared-container ">
        <button
          className={
            currentInstrument === "frenchHorn" ? "selected" : "not-selected"
          }
          onClick={() => onInstrumentClicked("frenchHorn")}
        >
          French Horn
        </button>
      </div>
      <div className="shared-container ">
        <button
          className={
            currentInstrument === "guitar" ? "selected" : "not-selected"
          }
          onClick={() => onInstrumentClicked("guitar")}
        >
          Guitar
        </button>
      </div>
      <div className="shared-container ">
        <button
          className={
            currentInstrument === "drums" ? "selected" : "not-selected"
          }
          onClick={() => onInstrumentClicked("drums")}
        >
          Drums{" "}
        </button>
      </div>
    </div>
  );
}
