import React from "react";
import PropTypes from "prop-types";
import { DatePicker } from "@yan_coquoz/react_input";
import "../../styles/components/_datePick.scss";
import { addStar } from "../../utils/functions";

const Dater = ({ idName, label, toUpperCase, placeh, isRequired }) => {
  const input = document.querySelector(`input#${idName}`);

  console.log(input);
  return (
    <>
      <DatePicker
        idName={idName}
        label={addStar(label, isRequired)}
        toUpperCase={toUpperCase}
        placeholder={placeh}
        isRequired={isRequired}
      />
    </>
  );
};
Dater.propTypes = {
  idName: PropTypes.string,
  label: PropTypes.string,
  toUpperCase: PropTypes.bool,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
};
export default Dater;
