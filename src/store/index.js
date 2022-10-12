import { configureStore } from "@reduxjs/toolkit";
import InputTextReducer from "features/InputTextSlice"; // route du reducer en lien avec le composant
import SelectReducer from "features/SelectSlice";
import HomeReducer from "features/HomeSlice";

const store = configureStore({
  reducer: {
    INPUT_TEXT: InputTextReducer,
    SELECT: SelectReducer,
    HOME: HomeReducer,
  },
});
export default store;
