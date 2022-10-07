import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../Wrapper";

/**
 * This function is used as a component to be used on all of the page
 * @returns a wrapper so that the content is inside the wrapper container
 */
function Template() {
  return (
    <>
      <Header></Header>
      <main className="main-content">
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
    </>
  );
}

Template.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Template;
