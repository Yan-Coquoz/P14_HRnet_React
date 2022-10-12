import { createSlice } from "@reduxjs/toolkit"; // remplace le reducer et les actions

const initialState = {
  // A prendre en compte seulement pour les tester
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
    onchange: (draft, action) => {
      const { key, value } = action.payload;

      switch (key) {
        case "firstname":
          draft.firstName = value;
          break;
        case "lastname":
          draft.lastName = value;
          break;
        case "street":
          draft.lastName = value;
          break;
        case "city":
          draft.lastName = value;
          break;
      }
    },
  },
});

// export les actions
export const { onchange } = InputTextSlice.actions;

// export des données du reducer
export default InputTextSlice.reducer;
