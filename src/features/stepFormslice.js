import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: [],
};

const stepFormslice = createSlice({
  name: "stepFormslice",
  initialState,
  reducers: {},
});

export default stepFormslice.reducer;
