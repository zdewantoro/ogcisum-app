import React from "react";
import InputForm from "../components/music/InputForm";
import TypeContainer from "../components/music/TypeContainer";
import { useState } from "react";
import Sequencer from "../components/music/Sequencer";
import { useLocation, useParams } from "react-router-dom";

/**
 * This function is used as a page to edit and create a sample music with the title
 * @param {Tone} toneObject
 * @param {Tone} toneTransport
 * @param {Tone} tonePartGuitar
 * @param {Tone} tonePartPiano
 * @param {Tone} tonePartFrenchHorn
 * @param {Tone} tonePartDrums
 * @returns react element
 */
function EditingSamplesPage({
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
  const location = useLocation();
  const { id } = useParams();
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

  /**
   * This function is used to handle the bar when it is click. It will change a particular sequence in a particular note.
   * By first checking the row/note and then check the bar/column of the note.
   * Then it will reverse the current value if its clicked else it will stay the same.
   */
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

  /**
   * A function to post the data to the database
   */
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
      await fetch(
        `http://wmp.interaction.courses/api/v1/?apiKey=TX0zQS9J&mode=update&endpoint=samples&sampleType=${instrument}&sampleName=${title}&id=${id}`,
        {
          method: "POST",
          body: JSON.stringify(sequences),
        }
      );
    }
  }

  /**
   * This function is used to set the instrument
   */
  function updateInstrument(newInstrument) {
    setInstrument(newInstrument);
  }

  return (
    <div>
      <h1 style={{ marginBottom: "2rem" }}>
        {location.state?.sample
          ? "Editing This Sample:"
          : "Creating This Sample:"}
      </h1>
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
      <div className="music-container">
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
      </div>
    </div>
  );
}

export default EditingSamplesPage;
