import React from "react";
import PropTypes from "prop-types";
import { DatePicker } from "@yan_coquoz/react_input";
import "../../styles/components/_datePick.scss";

const Dater = ({ idName, label, toUpperCase, placeh }) => {
  return (
    <>
      <DatePicker
        idName={idName}
        label={label}
        toUpperCase={toUpperCase}
        placeholder={placeh}
      />
    </>
  );
};
Dater.propTypes = {
  idName: PropTypes.string,
  label: PropTypes.string,
  toUpperCase: PropTypes.bool,
  placeholder: PropTypes.string,
};
export default Dater;
