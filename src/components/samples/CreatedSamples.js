import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Preview from "../music/Preview";
import {
  toneObject,
  toneTransport,
  tonePartGuitar,
  tonePartPiano,
  tonePartFrenchHorn,
  tonePartDrums,
} from "../../data/instruments";

export default function CreatedSamples({ sample, updateSample }) {
  const [shared, setShared] = useState(false);
  function SharedButton() {
    if (shared === true) {
      return <button className="shared-button">Shared</button>;
    } else {
      <button className="normal-button">Share</button>;
    }
  }

  return (
    <div className="border-dark">
      <div className="wrapper">
        <div className="rowbox-sample-container">
          <h3>{sample.name}</h3>
          <p className="p-darker">{sample.datetime}</p>
        </div>
        <div className="rowbox-sample-container">
          <Link to={`/Share-Samples`}>
            <button className="normal-button" onClick={() => setShared(true)}>
              Share
            </button>
          </Link>
          <Preview
            toneObject={toneObject}
            toneTransport={toneTransport}
            tonePartGuitar={tonePartGuitar}
            tonePartPiano={tonePartPiano}
            tonePartFrenchHorn={tonePartFrenchHorn}
            tonePartDrums={tonePartDrums}
            sequences={JSON.parse(sample.recording_data)}
            currentInstrument={sample.type}
          />{" "}
          {/* <button className="normal-button" onClick={() => {}}>
            Preview
          </button> */}
          <Link
            to={`/Edit-Samples/${sample.id}`}
            state={{ sample, updatedample: null }}
          >
            <button className="button-edit">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
