import React from "react";
import PropTypes from "prop-types";
import { InputText } from "@yan_coquoz/react_input";
import { onlyTextRegex, adressRegex } from "../../utils/constante";
import { enableButton, disableButton, addStar } from "../../utils/functions";
import { renderInputTextError } from "../../utils/errors";

import "../../styles/main.scss";

const Input = ({ idName, label, isRequired, myClass }) => {
  const [option, setOption] = React.useState("");

  function handleValue(name, value) {
    // adresse
    if (name === "street") {
      if (value.length <= 0 || adressRegex.test(value.toString())) {
        setOption("");
        enableButton();
      } else if (!adressRegex.test(value.toString())) {
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
        label={addStar(label, isRequired)}
        isRequired={isRequired}
        myClass={myClass}
        toUpperCase={true}
        sendValue={handleValue}
      />
      {renderInputTextError(label, option)}
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
