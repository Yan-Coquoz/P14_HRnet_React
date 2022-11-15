import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Modale } from "@yan_coquoz/react_input";

import Header from "../../components/Header";
import Input from "../../components/InputText";
import Dater from "../../components/DatePick";
import Selector from "../../components/Select";
import InputNum from "../../components/InputNumber";

import { submitForm } from "../../features/HomeSlice";
import { states, depts } from "../../utils/datas";
import { formValue } from "../../utils/functions";
import "../../styles/main.scss";

const Home = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {});

  function handleSubmitForm(evt) {
    evt.preventDefault();
    setIsOpen(true);
    // test récup data avec FormData
    const form = evt.target;
    const formDatas = new FormData(form);
    const firstName = formDatas.get("first_name"); // propriété name de l'input
    console.log(firstName);
    // fin de test
    const formValues = formValue(evt);
    console.log(formValues);
    dispatch(submitForm(formValues));
  }

  // TODO Gestion des entrées (validation)
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
                <Input
                  idName={"first_name"}
                  label={"first name"}
                  myClass={"input_text"}
                  isRequired={true}
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
                  placeh="birth date"
                />
                <Dater
                  idName="start_date"
                  label="start date"
                  toUpperCase={true}
                  placeh="start date"
                />
              </div>
            </div>
            <div className="home_container__box_form__form__container__box_two">
              <div className="home_container__box_form__form__container__box_two__input_bloc">
                <fieldset>
                  <legend> Address </legend>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                </fieldset>
              </div>

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
        open={isOpen}
        sendStyle={`#${Math.floor(Math.random() * 0xffffff).toString(16)}`}
        onClose={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Home;
