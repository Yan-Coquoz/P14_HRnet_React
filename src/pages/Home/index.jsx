/* eslint-disable no-unused-vars */
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";

import { Button, Modale } from "@yan_coquoz/react_input";

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
  validationFormSchema,
} from "../../utils";

import "../../styles/main.scss";

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <div className="home_container">
      <div className="home_container__box_header">
        <Header>HRnet</Header>
        <div className="link_bloc">
          <Link to="employee-list" aria-label="To employee list">
            View Current Employees
          </Link>
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
                    <div
                      className={errors.firstName ? "error active" : "error"}
                    >
                      {errors.firstName}
                    </div>

                    <Field
                      as={TextInput}
                      name={inputLastName.idName}
                      {...inputLastName}
                    />
                    {errors.lastName && touched.lastName}
                    <div className={errors.lastName ? "error active" : "error"}>
                      {errors.lastName}
                    </div>
                  </div>
                  <div className="home_container__box_form__form__container__box_one__input_bloc">
                    <Field name="birthDate" as={Dater} {...inputBirthDate} />
                    {errors.birthDate && touched.birthDate}
                    <div
                      className={errors.birthDate ? "error active" : "error"}
                    >
                      {errors.birthDate}
                    </div>

                    <Field name="startDate" as={Dater} {...inputStartDate} />
                    {errors.startDate && touched.startDate}
                    <div
                      className={errors.startDate ? "error active" : "error"}
                    >
                      {errors.startDate}
                    </div>
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
                        <div
                          className={errors.street ? "error active" : "error"}
                        >
                          {errors.street}
                        </div>

                        <Field
                          as={TextInput}
                          name={inputCity.idName}
                          {...inputCity}
                        />
                        {errors.city && touched.city}
                        <div className={errors.city ? "error active" : "error"}>
                          {errors.city}
                        </div>
                      </div>
                      <div>
                        <Field
                          name={selectState.idName}
                          as={Select}
                          {...selectState}
                        />
                        {errors.states && touched.states}
                        <div
                          className={errors.states ? "error active" : "error"}
                        >
                          {errors.states}
                        </div>

                        <Field as={InputNum} name="zipCode" {...inputZipCode} />
                        {(errors.zipCode, touched.zipCode)}
                        <div
                          className={errors.zipCode ? "error active" : "error"}
                        >
                          {errors.zipCode}
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="home_container__box_form__form__container__box_two__input_bloc">
                    <div>
                      <Field
                        name="department"
                        as={Select}
                        {...selectDepartment}
                      />
                      {errors.department && touched.department}
                      <div
                        className={errors.department ? "error active" : "error"}
                      >
                        {errors.department}
                      </div>
                    </div>

                    <div className="home_container__box_form__form__container__input_button">
                      <button type="submit" role="button">
                        Save
                      </button>
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
        sendStyle="#93ad15"
        onClose={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Home;
