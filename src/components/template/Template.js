import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

function Template({ title, children }) {
  return (
    <>
      <Header></Header>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
}

Template.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Template;
