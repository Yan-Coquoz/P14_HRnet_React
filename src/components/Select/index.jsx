import React from "react";
import PropTypes from "prop-types";
import { SelectField } from "@yan_coquoz/react_input";
import { onchange } from "../../features/SelectSlice";
import { useDispatch } from "react-redux";
import { addStar } from "../../utils/functions";

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
  idName: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  isRequired: PropTypes.bool.isRequired,
  optValue: PropTypes.bool,
  sendValue: PropTypes.func,
  toUpperCase: PropTypes.bool,
  group: PropTypes.bool,
};
Select.defaultProps = {
  sendValue: () => {},
  optValue: false,
  toUpperCase: false,
  isRequired: false,
  group: false,
};
export default Select;
