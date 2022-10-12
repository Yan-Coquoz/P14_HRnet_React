import { configureStore } from "@reduxjs/toolkit";
import InputTextReducer from "components/InputText/InputTextSlice"; // route du reducer en lien avec le composant
import SelectReducer from "components/Select/SelectSlice";

const store = configureStore({
  reducer: {
    INPUT_TEXT: InputTextReducer,
    SELECT: SelectReducer,
  },
});
export default store;
