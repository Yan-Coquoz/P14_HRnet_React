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
}) => {
  const dispatch = useDispatch();
  function sendValue(key, value) {
    // console.log(key, value);

    if (isRequired) {
      console.log("la valeur 'Option' n'est pas valable");
    }
    dispatch(onchange({ key, value }));
  }
  console.log("name", name, " ", "idName", idName);
  return (
    <>
      <SelectField
        tabs={tabs}
        idName={idName}
        labelName={addStar(labelName, isRequired)}
        isRequired={isRequired}
        optValue={optValue}
        toUpperCase={toUpperCase}
        sendValue={sendValue}
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
};
Select.defaultProps = {
  sendValue: () => {},
  optValue: false,
  toUpperCase: false,
  isRequired: false,
};
export default Select;
