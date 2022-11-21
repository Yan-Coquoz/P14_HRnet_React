import { states, depts } from "./datas";

export const selectState = {
  idName: "states",
  labelName: "state",
  isRequired: false,
  optValue: false,
  tabs: states,
  toUpperCase: true,
};

export const selectDepartment = {
  idName: "department",
  labelName: "department",
  isRequired: true,
  optValue: true,
  toUpperCase: true,
  tabs: depts,
};

export const inputFirstName = {
  idName: "first_name",
  labelName: "first name",
  isRequired: true,
  myClass: "input_text",
  toUpperCase: true,
};

export const inputLastName = {
  idName: "last_name",
  labelName: "last name",
  isRequired: true,
  myClass: "input_text",
  toUpperCase: true,
};

export const inputStreet = {
  idName: "street",
  labelName: "street",
  isRequired: true,
  myClass: "input_text",
  toUpperCase: true,
};

export const inputCity = {
  idName: "city",
  labelName: "city",
  isRequired: true,
  myClass: "input_text",
  toUpperCase: true,
};

export const inputZipCode = {
  idName: "zip_code",
  labelName: "zip code",
  isRequired: true,
  myClass: "input_number",
  toUpperCase: true,
};

export const inputBirthDate = {
  idName: "birthDate",
  labelName: "birth date",
  toUpperCase: true,
  placeh: "click here",
  lang: "en",
  isRequired: true,
};

export const inputStartDate = {
  idName: "start_date",
  labelName: "start date",
  toUpperCase: true,
  placeh: "click here",
  lang: "en",
  isRequired: true,
};
