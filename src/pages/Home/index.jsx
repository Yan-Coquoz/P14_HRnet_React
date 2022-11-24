import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Modale } from "@yan_coquoz/react_input";

import Header from "../../components/Header";
import Input from "../../components/InputText";
import Dater from "../../components/DatePick";
import Select from "../../components/Select";
import InputNum from "../../components/InputNumber";

import { submitForm } from "../../features/HomeSlice";
import {
  selectState,
  selectDepartment,
  inputFirstName,
  inputLastName,
  inputStreet,
  inputCity,
  inputZipCode,
  inputBirthDate,
  inputStartDate,
} from "../../utils/homeCompoProps";
import { formValue } from "../../utils/functions";
import "../../styles/main.scss";

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

  function handleSubmitForm(evt) {
    evt.preventDefault();

    setIsOpen(true);
    // test récup data avec FormData
    const form = evt.target;
    const formDatas = new FormData(form);
    console.log(formDatas);
    const firstName = formDatas.get("first_name"); // propriété name de l'input
    const state = formDatas.get("states");
    const department = formDatas.get("department");
    console.log(firstName);
    console.log(state, department);
    // fin de test
    const formValues = formValue(evt);
    console.log(formValues);
    dispatch(submitForm(formValues));

    form.reset();
  }

  return (
    <div className="home_container">
      <div className="home_container__box_header">
        <Header>HRnet</Header>
        <div className="link_bloc">
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
                <Input {...inputFirstName} />
                <Input {...inputLastName} />
              </div>
              <div className="home_container__box_form__form__container__box_one__input_bloc">
                <Dater {...inputBirthDate} />
                <Dater {...inputStartDate} />
              </div>
            </div>
            <div className="home_container__box_form__form__container__box_two">
              <div className="home_container__box_form__form__container__box_two__input_bloc">
                <fieldset>
                  <legend> Address </legend>
                  <div>
                    <Input {...inputStreet} />
                    <Input {...inputCity} />
                  </div>
                  <div>
                    <Select {...selectState} />
                    <InputNum {...inputZipCode} />
                  </div>
                </fieldset>
              </div>

              <div className="home_container__box_form__form__container__box_two__input_bloc">
                <Select {...selectDepartment} />
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
        open={isOpen}
        sendStyle={`#${Math.floor(Math.random() * 0xffffff).toString(16)}`}
        onClose={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Home;
