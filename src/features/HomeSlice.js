import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: [
    {
      firstName: "Johnny",
      lastName: "Doe",
      dateOfBirth: "1976-10-18",
      startDate: "2022-12-17",
      street: "35, selfy road",
      city: "Clearwater",
      states: "Minnesota",
      zipCode: "56450",
      department: "Engineering",
    },
  ],
};

export const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    submitForm: (draft, action) => {
      console.log("draft ", draft.employee);
      console.log(action.payload);
      draft.employee.push(action.payload);
      console.log(draft.employee);
    },
  },
});

export const { submitForm } = HomeSlice.actions;

// Possibilité : export d'UNE valeur du state

export const sendEmployees = (state) => {
  // console.log(state);
  return state.HOME.employee;
};

export default HomeSlice.reducer;
