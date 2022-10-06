import React from "react";
import { Link } from "react-router-dom";

export default function CreatedButton() {
  return (
    <div className="border-light">
      <div className="create-button">
        <Link to={`/Create-Samples`}>
          <button className="button-edit">Create Sample</button>
        </Link>
      </div>
    </div>
  );
}
