import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button, Modale } from "@yan_coquoz/react_input";
import Header from "components/Header";
import Input from "components/InputText";
import InputNum from "components/InputNumber";
import Dater from "components/DatePick";
import Selector from "components/Select";
import { Link } from "react-router-dom";
import { submitForm } from "features/HomeSlice";
import { depts, states } from "datas";
import "./style.scss";
import { formValue } from "Utils";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {});

  function handleSubmitForm(evt) {
    evt.preventDefault();
    const formValues = formValue(evt);
    console.log(formValues);
    dispatch(submitForm(formValues));
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
          <div className="home_container__box_form__form__container">
            <div className="home_container__box_form__form__container__box_one">
              <div className="home_container__box_form__form__container__box_one__input_bloc">
                <Input
                  idName={"first_name"}
                  label={"first name"}
                  isRequired={false}
                  myClass={"input_text"}
                />
                <Input
                  idName={"last_name"}
                  label={"last name"}
                  isRequired={false}
                  myClass={"input_text"}
                />
              </div>
              <div className="home_container__box_form__form__container__box_one__input_bloc">
                <Dater
                  idName="birthDate"
                  label="birth date"
                  toUpperCase={true}
                />
                <Dater
                  idName="start_date"
                  label="start date"
                  toUpperCase={true}
                />
              </div>
            </div>
            <div className="home_container__box_form__form__container__box_two">
              <fieldset className="home_container__box_form__form__container__box_two__input_bloc">
                <legend> Address </legend>
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
              <div className="home_container__box_form__form__container__box_two__input_bloc">
                <Selector
                  idName={"department"}
                  name={"department"}
                  isRequired={true}
                  tabs={depts}
                />
                <div className="home_container__box_form__form__container__input_button">
                  <Button type={"submit"}>Save</Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Modale
        message="Create Employee"
        open={() => setIsOpen(!isOpen)}
        sendStyle={`#${Math.floor(Math.random() * 0xffffff).toString(16)}`}
      />
    </div>
  );
};

// Home.propTypes = {};
export default Home;
