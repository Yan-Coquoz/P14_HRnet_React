import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zipCode: null,
};

export const InputNumSlice = createSlice({
  name: "Input_Num",
  initialState,
  reducers: {
    onchange: (draft, action) => {
      const { value } = action.payload;
      draft.zipCode = value;
    },
  },
});
export const { onchange } = InputNumSlice.actions;

export default InputNumSlice.reducer;
