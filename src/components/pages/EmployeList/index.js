import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "components/Header";
import "./style.scss";

const EmployeList = () => {
  // écrire le code ici
  return (
    <div>
      <Header>Current Employees</Header>
      <nav>
        un select (nombre d'entrée visible dans le tableau) / un input searchbar
        (recherche des personnes)
      </nav>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <p>Nombres visible des personnes dans le tableau courant</p>
        <div> pagination des pages du tableau</div>
      </div>

      <Link to="/">Home</Link>
    </div>
  );
};

//  EmployeList.propTypes = {};

export default EmployeList;
