import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StickyHeadTable from "components/Table";
import Header from "components/Header";
import { useSelector } from "react-redux";
import { sendEmployees } from "features/HomeSlice";
import "./style.scss";

const EmployeList = () => {
  const datas = useSelector(sendEmployees);

  return (
    <div>
      <Header>Current Employees</Header>
      <nav>
        <div>
          <label htmlFor="search">Search</label>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="employee"
          />
        </div>
      </nav>
      <div>
        <StickyHeadTable datas={datas} />
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

//  EmployeList.propTypes = {};

export default EmployeList;
