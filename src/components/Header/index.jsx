import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo_view.png";
import "./style.scss";
import { useSelector } from "react-redux";
import { getName } from "../../features/HomeSlice";

const Header = ({ children }) => {
  const firstName = useSelector(getName);
  console.log(firstName);
  return (
    <div>
      <div className="main_logo_container">
        <img src={logo} alt="HRNet logo" className="main_logo" />
      </div>
      <h1>
        {children} {firstName}
      </h1>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Header;
