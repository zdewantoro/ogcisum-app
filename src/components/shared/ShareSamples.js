import React from "react";

export default function ShareSamples({ Name, Date }) {
  return (
    <div className="border-dark">
      <div className="wrapper">
        <div className="rowbox-sample-container">
          <h3>{Name}</h3>
          <p className="p-darker">{Date}</p>
        </div>
        <div className="rowbox-sample-container">
          <button className="normal-button" onClick={() => {}}>
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}
