import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./slice/inputSlice";
import taskSlice from "./slice/taskSlice";

const store = configureStore({
  reducer: {
    text: inputSlice,
    tasks: taskSlice,
  },
});

export default store;
