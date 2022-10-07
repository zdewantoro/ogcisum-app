import CreatedSamples from "../components/samples/CreatedSamples";
import CreatedButton from "../components/samples/CreateButton";
import { useState, useEffect } from "react";

/**
 * This function is used as a home page to display all of the data and preview the sample
 * Create and edit the sample linked to editing sample page
 * @returns react elements
 */

function Home() {
  /**
   * This variable is use as a state for the samples
   */
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    getSample();
  }, []);

  /**
   * This function is used to fetch the data from api to get the data and id
   */
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
      <h1>Samples You've Created Here</h1>
      <div className="samples-container">
        {samples.map((data) => (
          <CreatedSamples sample={data} key={data.id}></CreatedSamples>
        ))}
      </div>

      <CreatedButton></CreatedButton>
    </div>
  );
}

export default Home;
