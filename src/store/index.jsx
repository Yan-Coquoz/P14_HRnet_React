import { configureStore } from "@reduxjs/toolkit";
import InputTextReducer from "../features/InputTextSlice";
import SelectReducer from "../features/SelectSlice";
import HomeReducer from "../features/HomeSlice";
import InputNumReducer from "../features/InputNumSlice";

const store = configureStore({
  reducer: {
    INPUT_TEXT: InputTextReducer,
    HOME: HomeReducer,
    SELECT: SelectReducer,
    INPUT_NUM: InputNumReducer,
  },
});
export default store;
