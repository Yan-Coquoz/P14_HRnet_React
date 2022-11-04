import * as React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StickyHeadTable from "../../components/Table";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { sendEmployees } from "../../features/HomeSlice";
import "./style.scss";

const Employee = () => {
  const datas = useSelector(sendEmployees);
  const [isSearching, setIsSearching] = React.useState(false);
  const [employeeDatas, setEmployeeDatas] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  // TODO faire le rendu de l'input en temps réel sur le tableau

  /**
   * Si le champ est vide :  on nettoie le tableau et isSearching est à false.
   *
   * Si on rempli le champ : a chaque caractères on lance un recherche et le nouveau tableau est rempli de la recherche, isSearching à true
   */

  function getInputSearch(evt) {
    setInputValue(evt.target.value.toLowerCase());
    setIsSearching(true);
    if (inputValue.length === 0) {
      renderTable();
      setIsSearching(false);
    }
  }

  function renderTable() {
    const _datas = [];
    if (inputValue.length !== 0 && isSearching) {
      datas.filter((element) => {
        if (
          element?.firstName.toLowerCase().includes(inputValue.toLowerCase())
        ) {
          _datas.push(element);
        }
      });
      return <StickyHeadTable datas={_datas} />;
    } else {
      _datas.length = 0;
      setIsSearching(false);
      return <StickyHeadTable datas={datas} />;
    }
  }

  return (
    <div className="employee_container">
      <div className="employee_container__header">
        <Header>Current Employees</Header>
        <nav className="employee_container__header__nav">
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
      </div>
      <div className="employee_container__table">
        {isSearching ? renderTable() : <StickyHeadTable datas={datas} />}
      </div>
    </div>
  );
};

//  Employee.propTypes = {};

export default Employee;
