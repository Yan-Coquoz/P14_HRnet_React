/* eslint-disable no-unused-vars */
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

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
  formValue,
  onlyTextRegex,
} from "../../utils";

import "../../styles/main.scss";

// Validation Yup
const validationFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "too short !!")
    .max(30, "too long !!")
    .required("Is Required"),
});

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

  // function handleSubmitForm(evt) {
  //   evt.preventDefault();

  //   const form = evt.target;
  //   const formValues = formValue(evt);
  //   dispatch(submitForm(formValues));
  //   setIsOpen(true);
  //   form.reset();
  // }

  const validateValue = (value) => {
    let validateMSG;
    if (!onlyTextRegex.test(value)) {
      validateMSG = "Incorrect";
    }
    return validateMSG;
  };

  return (
    <div className="home_container">
      <div className="home_container__box_header">
        <Header>HRnet</Header>
        <div className="link_bloc">
          <Link to="employee-list">View Current Employees</Link>
        </div>
      </div>

      <div className="home_container__box_form">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            birthDate: "",
            startDate: "",
            street: "",
            city: "",
            state: "",
            zipCode: "",
            department: "",
          }}
          validationSchema={validationFormSchema}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          {({ errors, touched }) => (
            <Form className="home_container__box_form__form">
              <div className="home_container__box_form__form__container">
                <div className="home_container__box_form__form__container__box_one">
                  <div className="home_container__box_form__form__container__box_one__input_bloc">
                    <Field
                      validate={validateValue}
                      as={Input}
                      name={inputFirstName.idName}
                      idName={inputFirstName.idName}
                      labelName={inputFirstName.labelName}
                      myClass={inputFirstName.myClass}
                      toUpperCase={inputFirstName.toUpperCase}
                      isRequired={inputFirstName.isRequired}
                    />
                    {errors.firstName && touched.firstName}
                    <div className="error">{errors.firstName}</div>

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
                      <Button type="submit">Save</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Modale
        message="Create Employee"
        open={isOpen}
        // sendStyle={`#${Math.floor(Math.random() * 0xffffff).toString(16)}`}
        onClose={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Home;
