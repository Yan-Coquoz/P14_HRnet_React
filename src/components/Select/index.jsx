import React from "react";
import PropTypes from "prop-types";
import Select from "@yan_coquoz/react_input/dist/components/Select";
import { onchange } from "../../features/SelectSlice";
import { useDispatch } from "react-redux";

const Selector = ({ idName, name, isRequired, tabs }) => {
  const dispatch = useDispatch();
  function sendValue(key, value) {
    // console.log(key, value);
    dispatch(onchange({ key, value }));
  }

  return (
    <>
      <Select
        idName={idName}
        name={name}
        isRequired={isRequired}
        sendValue={sendValue}
        tabs={tabs}
        toUpperCase={true}
      />
    </>
  );
};

Selector.propTypes = {
  idName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Selector;
