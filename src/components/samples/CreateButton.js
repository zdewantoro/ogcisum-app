import React from "react";
import Button from "../template/Button";

/**
 * This function is used for the component to be used on the home page
 * @returns a card and a create button
 */

export default function CreatedButton() {
  return (
    <div
      className="border-light"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button to={`/Create-Samples`} isLink={true} type="normal">
        Create Sample
      </Button>
    </div>
  );
}
