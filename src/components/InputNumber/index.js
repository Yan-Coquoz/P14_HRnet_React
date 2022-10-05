import React from "react";
import PropTypes from "prop-types";
import { InputNumber } from "@yan_coquoz/react_input";
import "./style.scss";

const InputNum = ({ idName, label, sendValue, isRequired, myClass }) => {
  return (
    <InputNumber
      idName={idName}
      label={label}
      sendValue={sendValue}
      isRequired={isRequired}
      myClass={myClass}
    />
  );
};

InputNum.propTypes = {
  idName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  sendValue: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired,
  myClass: PropTypes.string.isRequired,
};
export default InputNum;
