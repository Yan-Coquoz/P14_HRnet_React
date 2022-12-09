import React from "react";
import PropTypes from "prop-types";

import { SelectField } from "@yan_coquoz/react_input";

import { addStar } from "../../utils";

/**
 * Select est une fonction qui renvoie un composant SelectField.
 *
 * @prop   {String}  idName       field identifier
 * @prop   {String}  labelName    the label name
 * @prop   {Boolean}  isRequired   if the field is required, (send default browser error message)
 * @prop   {ArrayOf{String}||{Object}}  options      option list
 * @prop   {Boolean}  optValue      title of the different tables added in the list
 * @prop   {Boolean}  toUpperCase     Capitalize the first letter of each word in the label field
 * @prop   {Boolean}  group        If it is an array grouping
 * @prop   {Function}  onChange     capture the event
 * @prop   {String}  value        value in the field
 * @prop   {Function}  handleBlur   capture the event by click
 * @prop   {Boolean}  fieldRequired   if the field is required, A star id added
 *
 * @return  {React.ReactElement} Select type
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
  fieldRequired,
  value,
}) => {
  return (
    <>
      <SelectField
        group={group}
        idName={idName}
        isRequired={isRequired}
        labelName={addStar(labelName, fieldRequired)}
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
  fieldRequired: PropTypes.bool,
};

Select.defaultProps = {
  group: false,
  isRequired: false,
  optValue: false,
  toUpperCase: false,
};

export default Select;
