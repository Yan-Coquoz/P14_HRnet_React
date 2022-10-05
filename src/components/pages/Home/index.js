import React from "react";
// import PropTypes from "prop-types";
import Header from "components/Header";
import Input from "components/InputText";
import InputNum from "components/InputNumber";
import Selector from "components/Select";
import { Link } from "react-router-dom";
import { depts, states } from "datas";
import "./style.scss";

const Home = () => {
  function handleChange(evt) {
    console.log(evt.target.value);
  }
  return (
    <div>
      <Header>HRnet</Header>
      <Link to="employee-list">View Current Employees</Link>
      <div>
        <form>
          <div>
            <Input
              idName={"firstname"}
              label={"first name"}
              isRequired={false}
              sendValue={handleChange}
              myClass={"input_text"}
            />
            <Input
              idName={"lastname"}
              label={"last name"}
              isRequired={false}
              sendValue={handleChange}
              myClass={"input_text"}
            />
          </div>
          <fieldset>
            <legend>Address</legend>
            <Input
              idName={"street"}
              label={"street"}
              isRequired={false}
              sendValue={handleChange}
              myClass={"input_text"}
            />
            <Input
              idName={"city"}
              label={"city"}
              isRequired={false}
              sendValue={handleChange}
              myClass={"input_text"}
            />
            <Selector
              idName={"states"}
              name={"states"}
              isRequired={true}
              sendValue={handleChange}
              tabs={states}
            />
            <InputNum
              idName={"zip_code"}
              label={"zip code"}
              isRequired={false}
              sendValue={handleChange}
              myClass={"input_text"}
            />
          </fieldset>
          <div>
            <Selector
              idName={"department"}
              name={"department"}
              isRequired={true}
              sendValue={handleChange}
              tabs={depts}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

// Home.propTypes = {};
export default Home;
