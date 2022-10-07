import ShareSamples from "../components/shared/ShareSamples";
import ShareDestination from "../components/shared/ShareDestination";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * This page is used to share the samples to the api database
 * @param {Tone} sample
 * @param {Tone} toneObject
 * @param {Tone} toneTransport
 * @param {Tone} tonePartGuitar
 * @param {Tone} tonePartPiano
 * @param {Tone} tonePartFrenchHorn
 * @param {Tone} tonePartDrums
 * @returns react elements
 */

function ShareSamplesPage({
  sample,
  toneObject,
  toneTransport,
  tonePartGuitar,
  tonePartPiano,
  tonePartFrenchHorn,
  tonePartDrums,
}) {
  /**
   * Variable to be used on the code
   */
  const [samples, setSamples] = useState([]);
  const location = useLocation();

  /**
   * This function is used to fetch the data from api to get the data and id
   */
  useEffect(() => {
    getSample();
  }, []);
  async function getSample() {
    const response = await fetch(
      "http://wmp.interaction.courses/api/v1/?apiKey=TX0zQS9J&mode=read&endpoint=samples&order=asc"
    );
    const json = await response.json();
    const sample = json.samples;
    setSamples(sample);
  }
  return (
    <div>
      <h1>Share This Sample:</h1>
      <div className="samples-container">
        <ShareSamples
          name={location.state.sample.name}
          date={location.state.sample.datetime}
          toneObject={toneObject}
          toneTransport={toneTransport}
          tonePartGuitar={tonePartGuitar}
          tonePartPiano={tonePartPiano}
          tonePartFrenchHorn={tonePartFrenchHorn}
          tonePartDrums={tonePartDrums}
          // sequences={JSON.parse(sample.recording_data)}
          // currentInstrument={sample.type}
        ></ShareSamples>
      </div>
      <ShareDestination Destination={"UQ Sports, UQ"}></ShareDestination>
      <ShareDestination Destination={"UQU Shops, UQ"}></ShareDestination>
      <ShareDestination
        Destination={"Near UQ Lakes Station, UQ"}
      ></ShareDestination>
      <ShareDestination
        Destination={"General Purpose South, UQ"}
      ></ShareDestination>
      <ShareDestination Destination={"Great Court, UQ"}></ShareDestination>
    </div>
  );
}

export default ShareSamplesPage;
