import React from "react";
import PropTypes, { object } from "prop-types";
import Select from "@yan_coquoz/react_input/dist/components/Select";
import "./style.scss";

const Selector = ({ idName, name, isRequired, sendValue, tabs }) => {
  return (
    <Select
      idLabel={idName}
      name={name}
      isRequired={isRequired}
      sendValue={sendValue}
      tabs={tabs}
    />
  );
};
Selector.propTypes = {
  idName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  sendValue: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(object).isRequired,
};
export default Selector;
