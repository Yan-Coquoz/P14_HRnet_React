import React from "react";
import PropTypes from "prop-types";

import { SelectField } from "@yan_coquoz/react_input";

import { addStar } from "../../utils";

/**
 * Select est une fonction qui renvoie un composant SelectField.
 *
 * @prop   {String}  idName       [idName description]
 * @prop   {String}  labelName    [labelName description]
 * @prop   {Boolean}  isRequired   [isRequired description]
 * @prop   {ArrayOf{String}||{Object}}  options      [options description]
 * @prop   {Boolean}  optValue     [optValue description]
 * @prop   {Boolean}  toUpperCase  [toUpperCase description]
 * @prop   {Boolean}  group        [group description]
 * @prop   {Function}  onChange     [onChange description]
 * @prop   {String}  value        [value description]
 * @prop   {Function}  handleBlur   [handleBlur description]
 *
 * @return  {React.ReactElement}
 */
const Select = ({
  group,
  handleBlur,
  idName,
  isRequired,
  labelName,
  onChange,
  options,
  optValue,
  toUpperCase,
  value,
}) => {
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
  onChange: PropTypes.func,
  options: PropTypes.any.isRequired,
  optValue: PropTypes.bool,
  toUpperCase: PropTypes.bool,
  value: PropTypes.string,
};

Select.defaultProps = {
  group: false,
  isRequired: false,
  optValue: false,
  toUpperCase: false,
};

export default Select;
