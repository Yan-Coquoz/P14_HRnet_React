import React from "react";
import PropTypes from "prop-types";

import { addStar, fromLowerToUpperCase } from "../../utils";

import "../../styles/main.scss";

const Dater = ({ idName, labelName, toUpperCase, isRequired }) => {
  if (toUpperCase) {
    labelName = fromLowerToUpperCase(labelName);
  }

  return (
    <div className="input_container">
      <label htmlFor={idName} className="input_container__label">
        {addStar(labelName, isRequired)}
      </label>
      <input
        lang="en"
        type="date"
        name={idName}
        id={idName}
        required={isRequired}
      />
      <span className="validity"></span>
    </div>
  );
};

Dater.propTypes = {
  idName: PropTypes.string,
  labelName: PropTypes.string,
  toUpperCase: PropTypes.bool,
  isRequired: PropTypes.bool,
};
export default Dater;
