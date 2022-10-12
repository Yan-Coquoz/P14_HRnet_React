import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: "",
  department: "",
};

export const SelectSlice = createSlice({
  name: "SELECT",
  initialState,
  reducers: {
    onchange: (state, action) => {
      if (action.type.key === "state") {
        return (state.state = action.type.value);
      }
    },
  },
});
export const { onchange } = SelectSlice.actions;

export default SelectSlice.reducer;
