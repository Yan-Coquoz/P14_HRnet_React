// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StickyHeadTable from "../../components/Table";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { sendEmployees } from "../../features/HomeSlice";
import "./style.scss";

const Employee = () => {
  const datas = useSelector(sendEmployees);
  function getInputSearch(evt) {
    console.log(evt.target.value);
  }
  return (
    <div className="employee_container">
      <Header>Current Employees</Header>
      <nav className="employee_container__nav">
        <div>
          <label htmlFor="search"></label>
          <input
            type="search"
            name="search"
            id="search"
            onChange={getInputSearch}
            placeholder="search employee"
            autoFocus
          />
        </div>
        <div className="link_bloc">
          <Link to="/">Home</Link>
        </div>
      </nav>
      <div className="employee_container__table">
        <StickyHeadTable datas={datas} />
      </div>
    </div>
  );
};

//  Employee.propTypes = {};

export default Employee;
