import Template from "../components/template/Template";
import CreatedSamples from "../components/samples/CreatedSamples";
import CreatedButton from "../components/samples/CreateButton";
import { useState, useEffect } from "react";

function Home() {
  const [samples, setSamples] = useState([]);

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

  function updateSample(id, newSample) {
    // setSamples((prevState) =>
    //   prevState.map((sample) => (sample.id === id ? { ...newSample } : sample))
    // );
  }

  return (
    <Template title="Samples You've Created">
      {samples.map((data) => (
        <CreatedSamples
          sample={data}
          key={data.id}
          updateSample={updateSample}
        ></CreatedSamples>
      ))}

      <CreatedButton></CreatedButton>
    </Template>
  );
}

export default Home;
