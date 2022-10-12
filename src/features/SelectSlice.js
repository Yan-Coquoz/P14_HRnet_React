import { createSlice, createAction } from "@reduxjs/toolkit";
// action
export const on_change = createAction("ON_CHANGE");

const initialState = {
  state: "",
  department: "",
};

export const SelectSlice = createSlice({
  name: "SELECT",
  initialState,
  reducers: {
    onchange: (state, action) => {
      const { key, value } = action.payload;
      if (key === "state") {
        return (state.state = value);
      } else if (key === "department") {
        return (state.department = value);
      }
    },
  },
});
export const { onchange } = SelectSlice.actions;

export default SelectSlice.reducer;
