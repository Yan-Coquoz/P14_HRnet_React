import React from "react";
import PropTypes from "prop-types";
import { InputText } from "@yan_coquoz/react_input";

import {
  enableButton,
  disableButton,
  addStar,
  renderInputTextError,
  onlyTextRegex,
  addressRegex,
} from "../../utils";

import "../../styles/main.scss";

const Input = ({ idName, labelName, isRequired, myClass, toUpperCase }) => {
  const [option, setOption] = React.useState("");

  function handleValue(name, value) {
    // adresse
    if (name === "street") {
      if (value.length <= 0 || addressRegex.test(value.toString())) {
        setOption("");
        enableButton();
      } else if (!addressRegex.test(value.toString())) {
        setOption("address");
        disableButton();
      }
    } else {
      if (value.length <= 0 || onlyTextRegex.test(value.toString())) {
        enableButton();
        setOption("");
      } else if (!onlyTextRegex.test(value.toString())) {
        disableButton();
        setOption("onlyText");
      }
    }
  }

  return (
    <>
      <InputText
        idName={idName}
        labelName={addStar(labelName, isRequired)}
        isRequired={isRequired}
        myClass={myClass}
        toUpperCase={toUpperCase}
        sendValue={handleValue}
      />
      {/* {renderInputTextError(labelName, option)} */}
    </>
  );
};

Input.propTypes = {
  idName: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  myClass: PropTypes.string.isRequired,
  onchange: PropTypes.func,
};

export default Input;
