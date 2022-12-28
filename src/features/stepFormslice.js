import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: [],
};

const stepFormslice = createSlice({
  name: "stepFormslice",
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.formData.push(payload);
    },
  },
});
export const selectedData = (state) => state.stepFormslice.formData;
export const { addData } = stepFormslice.actions;
export default stepFormslice.reducer;
