import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { Button, Modale } from "@yan_coquoz/react_input";
import Header from "components/Header";
import Input from "components/InputText";
import InputNum from "components/InputNumber";
import Selector from "components/Select";

import { Link } from "react-router-dom";
import { depts, states } from "datas";
import "./style.scss";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {});

  function handleSubmitForm(evt) {
    evt.preventDefault();
    const firstname = evt.target[0].value;
    const lastname = evt.target[1].value;
    const street = evt.target[3].value;
    const city = evt.target[4].value;
    const state = evt.target[5].value;
    const zipCode = evt.target[6].value;
    const department = evt.target[7].value;
    console.log(
      firstname,
      lastname,
      "\n",
      street,
      "\n",
      city,
      state,
      "\n",
      zipCode,
      "\n",
      department,
    );

    handleClose();
  }
  return (
    <div className="home_container">
      <div className="home_container__box_header">
        <Header>HRnet</Header>
        <div>
          <Link to="employee-list">View Current Employees</Link>
        </div>
      </div>

      <div className="home_container__box_form">
        <form
          onSubmit={handleSubmitForm}
          className="home_container__box_form__form"
        >
          <div>
            <Input
              idName={"firstname"}
              label={"first name"}
              isRequired={false}
              myClass={"input_text"}
            />
            <Input
              idName={"lastname"}
              label={"last name"}
              isRequired={false}
              myClass={"input_text"}
            />
            <div>
              <label htmlFor="birth_date">Birth Date</label>
              <input type="date" name="" id="birth_date" />
            </div>
            <div>
              <label htmlFor="death_date">Death Date</label>
              <input type="date" name="" id="death_date" />
            </div>
          </div>
          <fieldset>
            <legend>Address</legend>
            <Input
              idName={"street"}
              label={"street"}
              isRequired={false}
              myClass={"input_text"}
            />
            <Input
              idName={"city"}
              label={"city"}
              isRequired={false}
              myClass={"input_text"}
            />
            <Selector
              idName={"states"}
              name={"states"}
              isRequired={true}
              tabs={states}
            />
            <InputNum
              idName={"zip_code"}
              label={"zip code"}
              isRequired={false}
              myClass={"input_text"}
            />
          </fieldset>
          <div>
            <Selector
              idName={"department"}
              name={"department"}
              isRequired={true}
              tabs={depts}
            />
          </div>
          <div className="home_container__box_form__form__box_button">
            <Button type={"submit"}>Save</Button>
          </div>
        </form>
      </div>
      <Modale
        message="Create Employee"
        open={() => handleClose()}
        sendStyle={`#${Math.floor(Math.random() * 0xffffff).toString(16)}`}
      />
    </div>
  );
};

// Home.propTypes = {};
export default Home;
