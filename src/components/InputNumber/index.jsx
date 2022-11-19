import React from "react";
import PropTypes from "prop-types";
import { InputNumber } from "@yan_coquoz/react_input";
import { onchange } from "../../features/InputNumSlice";
import { useDispatch } from "react-redux";
import { addStar, checkZipCode } from "../../utils/functions";
import { renderInputNumberError } from "../../utils/errors";
// import "./style.scss";

const InputNum = ({ idName, label, isRequired, myClass }) => {
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
        label={addStar(label, isRequired)}
        sendValue={sendValue}
        isRequired={isRequired}
        myClass={myClass}
        toUpperCase={true}
      />
      {renderInputNumberError(label, option)}
    </>
  );
};

InputNum.propTypes = {
  idName: PropTypes.string.isRequired,
  label: PropTypes.string,
  sendValue: PropTypes.func,
  isRequired: PropTypes.bool,
  myClass: PropTypes.string,
};
InputNum.defaultProps = {
  sendValue: () => {},
};
export default InputNum;
