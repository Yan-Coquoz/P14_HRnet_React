import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { SelectField } from "@yan_coquoz/react_input";

import { onchange } from "../../features/SelectSlice";
import { addStar } from "../../utils";

const Select = ({
  idName,
  labelName,
  isRequired,
  tabs,
  optValue,
  toUpperCase,
  group,
}) => {
  const dispatch = useDispatch();

  function sendValue(key, value) {
    // console.log(key, value);
    dispatch(onchange({ key, value }));
  }

  return (
    <>
      <SelectField
        tabs={tabs}
        idName={idName}
        labelName={addStar(labelName, isRequired)}
        isRequired={isRequired}
        optValue={optValue}
        sendValue={sendValue}
        toUpperCase={toUpperCase}
        group={group}
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
  sendValue: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  toUpperCase: PropTypes.bool,
};

Select.defaultProps = {
  group: false,
  isRequired: false,
  optValue: false,
  sendValue: () => {},
  toUpperCase: false,
};
export default Select;
