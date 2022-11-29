import { states, depts } from "./SelectDatas";

export const selectState = {
  idName: "states",
  labelName: "state",
  toUpperCase: true,
  tabs: states,
  group: false,
  optValue: true,
  isRequired: false,
};

export const selectDepartment = {
  idName: "department",
  labelName: "department",
  toUpperCase: true,
  tabs: depts,
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
  isRequired: false,
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
