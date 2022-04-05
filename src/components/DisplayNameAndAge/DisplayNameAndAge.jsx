import React from "react";
import { PropTypes } from "prop-types";

const DisplayNameAndAge = ({ name, age }) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h4>Age: {age}</h4>
    </div>
  );
};

DisplayNameAndAge.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default DisplayNameAndAge;
