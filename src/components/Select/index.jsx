import React from "react";
import PropTypes from "prop-types";

import { SelectField } from "@yan_coquoz/react_input";

import { addStar } from "../../utils";

const Select = ({
  idName,
  labelName,
  isRequired,
  options,
  optValue,
  toUpperCase,
  group,
  onChange,
  value,
  handleBlur,
}) => {
  console.log(options);
  return (
    <>
      <SelectField
        group={group}
        idName={idName}
        isRequired={isRequired}
        labelName={addStar(labelName, isRequired)}
        onBlur={handleBlur}
        onChange={onChange}
        options={options}
        optValue={optValue}
        toUpperCase={toUpperCase}
        value={value}
      />
    </>
  );
};

Select.propTypes = {
  group: PropTypes.bool,
  idName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  labelName: PropTypes.string.isRequired,
  optValue: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  toUpperCase: PropTypes.bool,
  value: PropTypes.string,
};

Select.defaultProps = {
  group: false,
  isRequired: false,
  optValue: false,
  onChange: () => {},
  toUpperCase: false,
};

export default Select;
