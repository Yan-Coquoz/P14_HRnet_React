import { states, depts } from "./SelectDatas";

export const selectState = {
  idName: "states",
  labelName: "state",
  toUpperCase: true,
  options: states,
  group: false,
  optValue: true,
  isRequired: true,
};

export const selectDepartment = {
  idName: "department",
  labelName: "department",
  toUpperCase: true,
  options: depts,
  group: false,
  optValue: false,
  isRequired: true,
};

export const inputFirstName = {
  idName: "firstName",
  labelName: "first name",
  myClass: "input_text",
  toUpperCase: true,
  isRequired: true,
};

export const inputLastName = {
  idName: "lastName",
  labelName: "last name",
  myClass: "input_text",
  toUpperCase: true,
  isRequired: false,
};

export const inputStreet = {
  idName: "street",
  labelName: "street",
  myClass: "input_text",
  toUpperCase: true,
  isRequired: false,
};

export const inputCity = {
  idName: "city",
  labelName: "city",
  myClass: "input_text",
  toUpperCase: true,
  isRequired: true,
};

export const inputZipCode = {
  idName: "zipCode",
  labelName: "zip code",
  myClass: "input_number",
  toUpperCase: true,
  mini: 10000,
  maxi: 99999,
  isRequired: true,
};

export const inputBirthDate = {
  idName: "birthDate",
  labelName: "birth date",
  toUpperCase: true,
  placeh: "click here",
  lang: "en",
  isRequired: false,
};

export const inputStartDate = {
  idName: "startDate",
  labelName: "start date",
  toUpperCase: true,
  placeh: "click here",
  lang: "en",
  isRequired: true,
};