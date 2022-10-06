import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="page-header">
      <Link to="/">
        <h1>OgCiSum</h1>
      </Link>
      <h4>Create & Share Samples, Listen in Mobile App!</h4>
    </header>
  );
}
