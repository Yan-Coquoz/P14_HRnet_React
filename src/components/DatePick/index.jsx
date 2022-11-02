import React from "react";
import PropTypes from "prop-types";
import { DatePicker } from "@yan_coquoz/react_input";
import "./style.scss";

const Dater = ({ idName, label, toUpperCase }) => {
  return (
    <div>
      <DatePicker idName={idName} label={label} toUpperCase={toUpperCase} />
    </div>
  );
};
Dater.propTypes = {
  idName: PropTypes.string,
  label: PropTypes.string,
  toUpperCase: PropTypes.bool,
};
export default Dater;
