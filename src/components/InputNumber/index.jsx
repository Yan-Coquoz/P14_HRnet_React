import React from "react";
import PropTypes from "prop-types";
import { InputNumber } from "@yan_coquoz/react_input";
import { useDispatch } from "react-redux";

import { onchange } from "../../features/InputNumSlice";
import { addStar, checkZipCode, renderInputNumberError } from "../../utils";

const InputNum = ({
  idName,
  labelName,
  isRequired,
  myClass,
  toUpperCase,
  mini,
  maxi,
}) => {
  const dispatch = useDispatch();
  const [option, setOption] = React.useState("");

  function sendValue(_key, _value) {
    const value = +_value;
    if (checkZipCode(value)) {
      setOption("");
      dispatch(onchange({ _key, value }));
    } else {
      setOption("zipCode");
    }
  }

  return (
    <>
      <InputNumber
        idName={idName}
        labelName={addStar(labelName, isRequired)}
        sendValue={sendValue}
        isRequired={isRequired}
        myClass={myClass}
        toUpperCase={toUpperCase}
        mini={mini}
        maxi={maxi}
      />
      {renderInputNumberError(labelName, option)}
    </>
  );
};

InputNum.propTypes = {
  idName: PropTypes.string.isRequired,
  labelName: PropTypes.string,
  sendValue: PropTypes.func,
  isRequired: PropTypes.bool,
  myClass: PropTypes.string,
  toUpperCase: PropTypes.bool,
  mini: PropTypes.number,
  maxi: PropTypes.number,
};
InputNum.defaultProps = {
  sendValue: () => {},
};
export default InputNum;
