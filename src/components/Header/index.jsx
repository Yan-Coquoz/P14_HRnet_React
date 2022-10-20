import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo_view.png";
import "./style.scss";

const Header = ({ children }) => {
  return (
    <div>
      <div className="main_logo_container">
        <img src={logo} alt="HRNet logo" className="main_logo" />
      </div>
      <h1>{children}</h1>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Header;
