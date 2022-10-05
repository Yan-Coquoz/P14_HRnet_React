import React from "react";
// import PropTypes from "prop-types";
import { InputText } from "@yan_coquoz/react_input";
import "./style.scss";

const Input = () => {
  const handleChange = (evt) => {
    console.log(evt.target.value);
  };
  return (
    <InputText
      idName={"firstname"}
      label={"Prénom"}
      isRequired={false}
      sendValue={handleChange}
      myClass={"input_text"}
    />
  );
};

// Input.propTypes = {};
export default Input;
