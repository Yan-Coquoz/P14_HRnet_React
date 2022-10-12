import React from "react";
import PropTypes from "prop-types";
import { InputText } from "@yan_coquoz/react_input";
import { useDispatch } from "react-redux";
import { onchange } from "components/InputText/InputTextSlice";
import "./style.scss";

const Input = ({ idName, label, isRequired, myClass }) => {
  const dispatch = useDispatch();

  const handleChange = (key, value) => {
    dispatch(onchange({ key, value }));
  };

  return (
    <InputText
      idName={idName}
      label={label}
      isRequired={isRequired}
      sendValue={handleChange}
      myClass={myClass}
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
