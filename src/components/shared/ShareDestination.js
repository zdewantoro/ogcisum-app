import React from "react";
import SharedButton from "./SharedButton";

/**
 * This function is used for the component to be used on the share sample page
 * @param {String} Destination
 * @returns destination and the share oe not share button
 */

export default function ShareDestination({ Destination }) {
  return (
    <div className="share-container">
      <p>{Destination}</p>
      <SharedButton></SharedButton>
    </div>
  );
}
