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
    <div className="input_container">
      <label htmlFor={idName} className="input_container__label">
        {toUpperCase
          ? addStar(fromLowerToUpperCase(labelName), isRequired)
          : addStar(labelName, isRequired)}
      </label>
      <input
        name={idName}
        value={value}
        onChange={onChange}
        placeholder={labelName}
      />
    </div>
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
