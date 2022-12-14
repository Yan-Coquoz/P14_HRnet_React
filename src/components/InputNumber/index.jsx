import React from "react";
import PropTypes from "prop-types";
import { InputNumber } from "@yan_coquoz/react_input";

import { addStar } from "../../utils";

const InputNum = ({
  idName,
  labelName,
  isRequired,
  myClass,
  toUpperCase,
  mini,
  maxi,
  onChange,
  value,
  fieldRequired,
}) => {
  return (
    <>
      <InputNumber
        idName={idName}
        labelName={addStar(labelName, fieldRequired)}
        onChange={onChange}
        isRequired={isRequired}
        myClass={myClass}
        toUpperCase={toUpperCase}
        mini={mini}
        maxi={maxi}
        value={value}
        placeholder={labelName}
      />
    </>
  );
};

InputNum.propTypes = {
  idName: PropTypes.string.isRequired,
  labelName: PropTypes.string,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
  myClass: PropTypes.string,
  toUpperCase: PropTypes.bool,
  mini: PropTypes.number,
  maxi: PropTypes.number,
  fieldRequired: PropTypes.bool,
};
InputNum.defaultProps = {
  onChange: () => {},
};
export default InputNum;
