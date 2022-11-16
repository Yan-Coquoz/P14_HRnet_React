import React from "react";

import "../../styles/components/_inputError.scss";

const InputError = (props) => {
  return <div className="input_error_container">{props.children}</div>;
};

export default InputError;
