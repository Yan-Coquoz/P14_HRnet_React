/* eslint-disable no-unused-vars */
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Button, Modale, SelectField } from "@yan_coquoz/react_input";

import Header from "../../components/Header";
import TextInput from "../../components/InputText";
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
  addressRegex,
  zipCodeRegex,
} from "../../utils";

import "../../styles/main.scss";

// Validation Yup
const validationFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "too short !")
    .max(30, "too long !!")
    .matches(
      onlyTextRegex,
      `- No Digits
    - No special characters`
    )
    .required("Is required"),

  lastName: Yup.string()
    .min(2, "too short !")
    .max(30, "too long !!")
    .matches(
      onlyTextRegex,
      `- Not numbers
    - No special characters`
    ),

  street: Yup.string()
    .min(2, "too short !")
    .max(30, "too long !!")
    .matches(addressRegex, "No special characters"),

  city: Yup.string()
    .min(2, "too short !")
    .max(30, "too long !!")
    .matches(
      onlyTextRegex,
      `- No Digits
    - No special characters`
    )
    .required("Is required"),
  zipCode: Yup.number()
    .positive()
    .integer()
    .moreThan(10000, "Must have 5 numbers ex : 56210")
    .max(99999, "Too long !!")
    .required(),
  birthDate: Yup.date(),
  startDate: Yup.date().required("Is required"),
  states: Yup.string().nullable(false).required(),
  department: Yup.string().required().nullable(false),
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
            states: "",
            zipCode: "",
            department: "",
          }}
          validationSchema={validationFormSchema}
          onSubmit={(value, { resetForm }) => {
            dispatch(submitForm(value));

            setIsOpen(true);
            resetForm();
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="home_container__box_form__form">
              <div className="home_container__box_form__form__container">
                <div className="home_container__box_form__form__container__box_one">
                  <div className="home_container__box_form__form__container__box_one__input_bloc">
                    <Field
                      as={TextInput}
                      name={inputFirstName.idName}
                      {...inputFirstName}
                    />
                    {errors.firstName && touched.firstName}
                    <div className="error">{errors.firstName}</div>

                    <Field
                      as={TextInput}
                      name={inputLastName.idName}
                      {...inputLastName}
                    />
                    {errors.lastName && touched.lastName}
                    <div className="error">{errors.lastName}</div>
                  </div>
                  <div className="home_container__box_form__form__container__box_one__input_bloc">
                    <Field name="birthDate" as={Dater} {...inputBirthDate} />
                    {errors.birthDate && touched.birthDate}
                    <div className="error">{errors.birthDate}</div>

                    <Field name="startDate" as={Dater} {...inputStartDate} />
                    {errors.startDate && touched.startDate}
                    <div className="error">{errors.startDate}</div>
                  </div>
                </div>
                <div className="home_container__box_form__form__container__box_two">
                  <div className="home_container__box_form__form__container__box_two__input_bloc">
                    <fieldset>
                      <legend> Address </legend>
                      <div>
                        <Field
                          as={TextInput}
                          name={inputStreet.idName}
                          {...inputStreet}
                        />
                        {errors.street && touched.street}
                        <div className="error">{errors.street}</div>

                        <Field
                          as={TextInput}
                          name={inputCity.idName}
                          {...inputCity}
                        />
                        {errors.city && touched.city}
                        <div className="error">{errors.city}</div>
                      </div>
                      <div>
                        <Field
                          name={selectState.idName}
                          as={Select}
                          {...selectState}
                        />
                        {errors.state && touched.state}
                        <div className="error">{errors.state}</div>

                        <Field as={InputNum} name="zipCode" {...inputZipCode} />
                        {(errors.zipCode, touched.zipCode)}
                        <div className="error">{errors.zipCode}</div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="home_container__box_form__form__container__box_two__input_bloc">
                    {/* <Select {...selectDepartment} /> */}
                    <div>
                      <Field
                        name="department"
                        as={Select}
                        {...selectDepartment}
                      />
                      {errors.department && touched.department}
                      <div className="error">{errors.department}</div>
                    </div>

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
