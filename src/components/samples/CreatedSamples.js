import React from "react";
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
import Button from "../template/Button";

/**
 * This function is used for the component to be used on the home page
 * @param {data} sample data from the database to be used as a props
 * @returns a card, name, date, and buttons
 */

export default function CreatedSamples({ sample }) {
  const [shared, setShared] = useState(false);

  /**
   *
   * @returns a button according to whether the music has been shared or not
   */
  function SharedButton() {
    if (shared === true) {
      return <button className="shared-button">Shared</button>;
    } else {
      <button className="normal-button">Share</button>;
    }
  }

  return (
    <div className="border-dark">
      <div className="sample-card-left">
        <h3>{sample.name}</h3>
        <p className="p-darker">{sample.datetime}</p>
      </div>
      <div className="sample-card-right">
        <Button
          to={`/Share-Samples/${sample.id}`}
          state={{ sample, updatedSample: null }}
          isLink={true}
          type="normal"
        >
          Share
        </Button>
        <Preview
          toneObject={toneObject}
          toneTransport={toneTransport}
          tonePartGuitar={tonePartGuitar}
          tonePartPiano={tonePartPiano}
          tonePartFrenchHorn={tonePartFrenchHorn}
          tonePartDrums={tonePartDrums}
          sequences={JSON.parse(sample.recording_data)}
          currentInstrument={sample.type}
        />
        <Button
          to={`/Edit-Samples/${sample.id}`}
          state={{ sample, updatedSample: null }}
          isLink={true}
          type="normal"
        >
          Edit
        </Button>
      </div>
    </div>
  );
}
