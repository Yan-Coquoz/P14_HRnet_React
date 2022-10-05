import React from "react";
// import PropTypes from "prop-types";
import Header from "components/Header";
import Input from "components/InputText";
import { Link } from "react-router-dom";
import "./style.scss";

const Home = () => {
  return (
    <div>
      <Header>HRnet</Header>
      <Link to="employee-list">View Current Employees</Link>
      <Input />
    </div>
  );
};

// Home.propTypes = {};
export default Home;
