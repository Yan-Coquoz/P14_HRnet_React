import React from "react";
import PropTypes from "prop-types";
import { InputNumber } from "@yan_coquoz/react_input";
import { onchange } from "../../features/InputNumSlice";
import { useDispatch } from "react-redux";
import "./style.scss";

const InputNum = ({ idName, label, isRequired, myClass }) => {
  const dispatch = useDispatch();
  function sendValue(key, value) {
    // console.log(key, value);
    // const regexCP = /^(\\d{5})$/;
    dispatch(onchange({ key, value }));
  }
  return (
    <InputNumber
      idName={idName}
      label={label}
      sendValue={sendValue}
      isRequired={isRequired}
      myClass={myClass}
      toUpperCase={true}
    />
  );
};

InputNum.propTypes = {
  idName: PropTypes.string.isRequired,
  label: PropTypes.string,
  sendValue: PropTypes.func,
  isRequired: PropTypes.bool,
  myClass: PropTypes.string,
};
InputNum.defaultProps = {
  sendValue: () => {},
};
export default InputNum;
