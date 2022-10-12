import { createSlice } from "@reduxjs/toolkit"; // remplace le reducer

const initialState = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
};

// NomDuSlice remplace le container
export const InputTextSlice = createSlice({
  // nom du container
  name: "INPUT_TEXT", // type => titre du compo
  initialState,
  reducers: {
    onchange: (state, action) => {
      switch (action.type.key) {
        case "firstname":
          return (state.firstName = action.type.value);
        case "lastname":
          return (state.lastName = action.type.value);
        case "street":
          return (state.lastName = action.type.value);
        case "city":
          return (state.lastName = action.type.value);
      }
    },
  },
});

// export des données des actions
export const { onchange } = InputTextSlice.actions;

// export des données du reducer
export default InputTextSlice.reducer;
