import React from "react";
import PropTypes from "prop-types";
import { InputText } from "@yan_coquoz/react_input";
import "./style.scss";

const Input = ({ idName, label, isRequired, myClass }) => {
  return (
    <InputText
      idName={idName}
      label={label}
      isRequired={isRequired}
      myClass={myClass}
      toUpperCase={true}
    />
  );
};

Input.propTypes = {
  idName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  myClass: PropTypes.string.isRequired,
  onchange: PropTypes.func,
};

export default Input;
