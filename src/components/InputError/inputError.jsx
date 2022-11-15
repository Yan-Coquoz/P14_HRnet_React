import React from "react";

import "../../styles/components/_inputError.scss";

const InputError = (props) => {
  return (
    <div className="error_container">
      <span>{props.children}</span>
    </div>
  );
};

export default InputError;
