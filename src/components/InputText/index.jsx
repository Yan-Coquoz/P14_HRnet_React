import React, { useRef } from "react";
import PropTypes from "prop-types";
import { InputText } from "@yan_coquoz/react_input";
import "../../styles/main.scss";
import InputError from "../../components/InputError/inputError";

const Input = ({ idName, label, isRequired, myClass }) => {
  const [option, setOption] = React.useState("");

  function handleValue(_, value) {
    const regex = /(^[A-Z]{0,18})\D$/gim; // des caractères alphabétique compris entre 1 et 18 sans nombres
    // sans required
    if (!isRequired && regex.test(value.toString())) {
      setOption("");
    } else if (!isRequired && !regex.test(value.toString())) {
      setOption("regex");
    }
    // avec required
    if (isRequired) {
      if (value.length <= 1 && regex.test(value.toString())) {
        setOption("");
      } else if (!regex.test(value.toString())) {
        setOption("regex");
      }
    }
  }

  function renderTypeError(type = null) {
    const divError = document.querySelector(".error_container");
    const inputClass = document.querySelector(`#${myClass}`);

    if (type === "regex") {
      return (
        <InputError>
          <strong>{`${label} is not correct :`}</strong>
          <ul>
            <li>not long enough</li>
            <li>must not contain numbers</li>
            <li>must be between 1 and 18 characters</li>
            <li>must not contain special characters</li>
          </ul>
        </InputError>
      );
    }

    return <InputError />;
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
      {renderTypeError(option)}
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
