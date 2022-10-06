import React from "react";
import Template from "../components/template/Template";
import InputForm from "../components/music/InputForm";
import TypeContainer from "../components/music/TypeContainer";
import { useState, useEffect } from "react";
import Sequencer from "../components/music/Sequencer";
import { useLocation, useParams } from "react-router-dom";

function EditingSamplesPage({
  toneObject,
  toneTransport,
  tonePartGuitar,
  tonePartPiano,
  tonePartFrenchHorn,
  tonePartDrums,
}) {
  const location = useLocation();
  const { id } = useParams();
  console.log(location.pathname);
  const [instrument, setInstrument] = useState(
    location.state?.sample ? location.state.sample.type : ""
  );
  const [title, setTitle] = useState(
    location.state?.sample ? location.state.sample.name : ""
  );
  const [sequences, setSequences] = useState(
    location.state?.sample
      ? JSON.parse(location.state.sample.recording_data)
      : [
          {
            B: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          },
          {
            A: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          },
          {
            G: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          },
          {
            F: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          },
          {
            E: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          },
          {
            D: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          },
          {
            C: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          },
        ]
  );

  useEffect(() => {
    console.log(sequences);
  }, [sequences]);
  function handleBarClick(keyIndex, barKey) {
    return function (barIndex) {
      setSequences((prevState) =>
        prevState.map((seq, idx) => {
          if (idx !== keyIndex) return seq;
          return {
            [barKey]: seq[barKey].map((x, id) => (id === barIndex ? !x : x)),
          };
        })
      );
    };
  }

  async function handleSubmit() {
    if (location.pathname === "/Create-Samples") {
      await fetch(
        `http://wmp.interaction.courses/api/v1/?apiKey=TX0zQS9J&mode=create&endpoint=samples&sampleType=${instrument}&sampleName=${title}`,
        {
          method: "POST",
          body: JSON.stringify(sequences),
        }
      );
    } else {
      const response = await fetch(
        `http://wmp.interaction.courses/api/v1/?apiKey=TX0zQS9J&mode=update&endpoint=samples&sampleType=${instrument}&sampleName=${title}&id=${id}`,
        {
          method: "POST",
          body: JSON.stringify(sequences),
        }
      );

      const json = await response.json();

      // if (location.state?.updateEvent) {
      //   location.state.updateEvent(location.state.sample.id, json);
      // }
    }
  }

  // useEffect(() => {
  //   tonePartPiano.clear();
  //   toneTransport.cancel();
  //   toneTransport.schedule((time) => {
  //     console.log("Preview stopped automatically.");
  //   }, 16 / 4);
  // });

  // useEffect(() => {
  //   if (sample !== null) {

  //   }
  // }, []);

  // async function getSample() {
  //   const musicData = await fetch(
  //     "http://wmp.interaction.courses/api/v1/?apiKey=TX0zQS9J&mode=read&endpoint=samples&order=asc"
  //   );
  //   const json = await musicData.json();
  //   const sample = json.samples;
  //   console.log(sample);
  //   setSequences(sample.recording_data);
  //   setInstrument(sample.type);
  // }

  // console.log(sequences);

  function updateInstrument(newInstrument) {
    setInstrument(newInstrument);
  }

  return (
    <Template title="Editing This Sample:">
      <InputForm
        title={title}
        setTitle={setTitle}
        toneObject={toneObject}
        toneTransport={toneTransport}
        tonePartGuitar={tonePartGuitar}
        tonePartPiano={tonePartPiano}
        tonePartFrenchHorn={tonePartFrenchHorn}
        tonePartDrums={tonePartDrums}
        sequences={sequences}
        currentInstrument={instrument}
        handleSubmit={handleSubmit}
      />
      <TypeContainer
        onInstrumentClicked={updateInstrument}
        currentInstrument={instrument}
      />
      {sequences.map((sequence, idx) => {
        const key = Object.keys(sequence)[0];

        return (
          <Sequencer
            key={key}
            sequence={sequence[key]}
            title={key}
            toneObject={toneObject}
            toneTransport={toneTransport}
            tonePartGuitar={tonePartGuitar}
            tonePartPiano={tonePartPiano}
            tonePartFrenchHorn={tonePartFrenchHorn}
            tonePartDrums={tonePartDrums}
            note={`${key}3`}
            onBarClicked={handleBarClick(idx, key)}
            curInstrument={instrument}
          />
        );
      })}
    </Template>
  );
}

export default EditingSamplesPage;
