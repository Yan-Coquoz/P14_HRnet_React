import { states, depts } from "./SelectDatas";

export const selectState = {
  idName: "states",
  labelName: "state",
  isRequired: false,
  optValue: false,
  toUpperCase: true,
  tabs: states,
  group: false,
};

export const selectDepartment = {
  idName: "department",
  labelName: "department",
  isRequired: true,
  optValue: true,
  toUpperCase: true,
  tabs: depts,
  group: false,
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
  isRequired: false,
  myClass: "input_text",
  toUpperCase: true,
};

export const inputStreet = {
  idName: "street",
  labelName: "street",
  isRequired: false,
  myClass: "input_text",
  toUpperCase: true,
};

export const inputCity = {
  idName: "city",
  labelName: "city",
  isRequired: false,
  myClass: "input_text",
  toUpperCase: true,
};

export const inputZipCode = {
  idName: "zip_code",
  labelName: "zip code",
  isRequired: true,
  myClass: "input_number",
  toUpperCase: true,
  mini: 10000,
  maxi: 99999,
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
