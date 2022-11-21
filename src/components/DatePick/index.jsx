import React from "react";
import PropTypes from "prop-types";
import { DatePicker } from "@yan_coquoz/react_input";
import "../../styles/components/_datePick.scss";
import { addStar } from "../../utils/functions";

const Dater = ({
  idName,
  labelName,
  toUpperCase,
  placeh,
  isRequired,
  lang,
}) => {
  const input = document.querySelector(`input#${idName}`);

  console.log(input);
  return (
    <div>
      <DatePicker
        idName={idName}
        labelName={addStar(labelName, isRequired)}
        toUpperCase={toUpperCase}
        placeholder={placeh}
        isRequired={isRequired}
        lang={lang}
      />
    </div>
  );
};
Dater.propTypes = {
  idName: PropTypes.string,
  labelName: PropTypes.string,
  toUpperCase: PropTypes.bool,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  lang: PropTypes.string,
};
export default Dater;
