import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../Wrapper";

/**
 * This function is used as a component header to be used on all of the page
 * @returns return a header consist of a link and the titles on the header
 */

export default function Header() {
  return (
    <header className="page-header">
      <Wrapper className="page-content">
        <Link to="/">
          <h1>OgCiSum</h1>
        </Link>
        <h4>Create & Share Samples, Listen in Mobile App!</h4>
      </Wrapper>
    </header>
  );
}
