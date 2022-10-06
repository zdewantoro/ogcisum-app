import React from "react";
import { useState } from "react";

export default function SharedButton({ Destination }) {
  const [selected, setSelected] = useState("");
  return (
    <div className="wrapper">
      <div className="shared-container ">
        <button
          className={selected === "notShared" ? "selected" : "not-selected"}
          onClick={() => setSelected("notShared")}
        >
          Not Shared
        </button>
      </div>
      <div className="shared-container ">
        <button
          className={selected === "shared" ? "selected" : "not-selected"}
          onClick={() => setSelected("shared")}
        >
          Shared
        </button>
      </div>
    </div>
  );
}
