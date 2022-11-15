import React, { useRef } from "react";
import PropTypes from "prop-types";
import { InputText } from "@yan_coquoz/react_input";
import "../../styles/main.scss";
import InputError from "../../components/InputError/inputError";

const Input = ({ idName, label, isRequired, myClass }) => {
  function handleValue(_, value) {
    const reg = /(^[A-Z]{1,18})\D$/gim;
    console.log("regex", reg.test(value));
    if (reg.test(value.toString())) {
      renderTypeError("regex");
    }
  }
  function renderTypeError(type) {
    const divError = document.querySelector(".error_container");
    const inputClass = document.querySelector(`#${myClass}`);
    if (type === "required") {
      return (
        <InputError>
          <strong>{`${label}`} is required with more than 2 characters </strong>
        </InputError>
      );
    } else if (type === "regex") {
      return (
        <InputError>
          <strong>{`${label}`} is not correct</strong>
        </InputError>
      );
    }
    return "";
  }
  return (
    <>
      <InputText
        idName={idName}
        label={label}
        isRequired={isRequired}
        myClass={myClass}
        toUpperCase={true}
        sendValue={handleValue}
      />
      {renderTypeError()}
    </>
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
