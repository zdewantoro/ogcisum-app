import React from "react";
import SharedButton from "./SharedButton";

export default function ShareDestination({ Destination }) {
  return (
    <div className="wrapper">
      <div className="rowbox-sample-container">
        <p>{Destination}</p>
      </div>
      <div className="rowbox-sample-container">
        <SharedButton></SharedButton>
      </div>
    </div>
  );
}
