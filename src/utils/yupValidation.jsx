import * as Yup from "yup";
import { onlyTextRegex, addressRegex } from "./index";

export const validationFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "too short !")
    .max(30, "too long !!")
    .matches(
      onlyTextRegex,
      `- No numbers
    - No special characters`
    )
    .required(),

  lastName: Yup.string()
    .min(2, "too short !")
    .max(30, "too long !!")
    .matches(
      onlyTextRegex,
      `- No numbers
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
      `- No numbers
    - No special characters`
    )
    .required("Is required"),
  zipCode: Yup.number()
    .positive()
    .integer()
    .moreThan(9999, "Must have 5 numbers ex : 56210")
    .max(99999, "Too long !!")
    .required(),

  birthDate: Yup.date(),
  startDate: Yup.date().required("Is required"),
  states: Yup.string().nullable(false).required(),
  department: Yup.string().required().nullable(false),
});
