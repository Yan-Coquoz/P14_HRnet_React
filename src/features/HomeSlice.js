import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  state: "",
  zipCode: 0,
  department: "",
};

export const HomeSlice = createSlice({
  name: "HOME",
  initialState,
  reducers: {
    submitForm: (draft, action) => {
      console.log(draft);
      console.log(action);
      draft;
    },
  },
});

export const { submitForm } = HomeSlice.actions;
// Possibilité : export d'UNE valeur du state
export const getName = (state) => {
  return state.HOME.firstName;
};
export default HomeSlice.reducer;
