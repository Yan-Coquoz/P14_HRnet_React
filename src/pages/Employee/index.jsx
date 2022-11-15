import * as React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StickyHeadTable from "../../components/Table";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { sendEmployees } from "../../features/HomeSlice";
import "../../styles/main.scss";

const Employee = () => {
  const stateDatas = useSelector(sendEmployees);
  const ref = React.useRef();
  const [renderDataTable, setRenderDataTable] = React.useState(
    <StickyHeadTable datas={stateDatas} />,
  );

  function getInputSearch(evt) {
    const inputValue = evt.target.value.toLowerCase();
    const _datas = [];
    if (inputValue !== "") {
      stateDatas.map((data) => {
        if (data.firstName.toLowerCase().includes(inputValue)) {
          _datas.push(data);
        }
      });
      renderTable(_datas);
    } else {
      renderTable();
    }
  }

  function renderTable(_data = []) {
    if (_data.length === 0 && ref.current.value === "") {
      setRenderDataTable(<StickyHeadTable datas={stateDatas} />);
    } else {
      setRenderDataTable(<StickyHeadTable datas={_data} />);
    }
  }

  React.useEffect(() => {
    renderTable();
  }, [ref.current?.value]);

  return (
    <div className="employee_container">
      <div className="employee_container__header">
        <Header>Current Employees</Header>
        <nav className="employee_container__header__nav">
          <div>
            <label htmlFor="search"></label>
            <input
              ref={ref}
              type="search"
              name="search"
              id="search"
              onChange={(evt) => getInputSearch(evt)}
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
        {ref.current?.value === "" ? (
          <StickyHeadTable datas={stateDatas} />
        ) : (
          renderDataTable
        )}
      </div>
    </div>
  );
};

//  Employee.propTypes = {};

export default Employee;
