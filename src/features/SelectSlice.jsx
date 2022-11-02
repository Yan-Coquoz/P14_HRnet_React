import { createSlice } from "@reduxjs/toolkit";
// action
// export const on_change = createAction("ON_CHANGE");

const initialState = {
  state: "",
  department: "",
};

export const SelectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    onchange: (draft, action) => {
      const { key, value } = action.payload;
      // console.log(action.type);
      // console.log(action.payload);
      // console.log(key, value);
      if (key === "states") {
        draft.state = value;
      } else if (key === "department") {
        draft[key] = value;
      }
    },
  },
});
export const { onchange } = SelectSlice.actions;

export default SelectSlice.reducer;
