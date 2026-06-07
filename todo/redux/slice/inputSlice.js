import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
  errorSpace: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    change: (state, action) => {
      state.inputValue = action.payload;
    },
    inputError: (state) => {
      state.errorSpace = "Задача не может быть пустой";
      state.inputValue = "";
    },
    detele_error: (state) => {
      state.errorSpace = "";
    },
    zero: (state) => {
      state.inputValue = "";
      state.errorSpace = "";
    },
  },
});

export const { change, inputError, detele_error, zero } = inputSlice.actions;
export default inputSlice.reducer;
