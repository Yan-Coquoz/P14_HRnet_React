import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/triskell.svg";
import "./style.scss";

const Header = (props) => {
  return (
    <div>
      <div className="main_logo_container">
        <img src={logo} alt="HRNet logo" className="main_logo" />
      </div>
      <h1>{props.children}</h1>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Header;
