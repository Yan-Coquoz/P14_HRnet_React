import React from "react";
import PropTypes from "prop-types";

import { addStar, fromLowerToUpperCase } from "../../utils";

import "../../styles/main.scss";

const TextInput = ({
  idName,
  labelName,
  isRequired,
  toUpperCase,
  onChange,
  value,
}) => {
  return (
    <>
      <label htmlFor={idName}>
        {toUpperCase
          ? addStar(fromLowerToUpperCase(labelName), isRequired)
          : addStar(labelName, isRequired)}
      </label>
      <input name={idName} value={value} onChange={onChange} />
    </>
  );
};

TextInput.propTypes = {
  idName: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  onchange: PropTypes.func,
  value: PropTypes.string,
};

export default TextInput;
