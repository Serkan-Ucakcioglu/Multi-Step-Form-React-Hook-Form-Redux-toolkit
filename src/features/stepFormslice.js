import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: [],
  step: 1,
};

const stepFormslice = createSlice({
  name: "stepFormslice",
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.formData.push(payload);
    },
    addStep: (state, { payload }) => {
      state.step = state.step = payload;
    },
  },
});
export const selectedData = (state) => state.stepFormslice.formData;
export const selectedStep = (state) => state.stepFormslice.step;
export const { addData, addStep } = stepFormslice.actions;
export default stepFormslice.reducer;
