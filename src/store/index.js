import { configureStore } from "@reduxjs/toolkit";
import stepFormslice from "../features/stepFormslice";

const store = configureStore({
  reducer: {
    stepFormslice,
  },
});
export default store;
