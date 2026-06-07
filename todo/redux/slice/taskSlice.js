import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskValue: [],
  error: "",
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    errorMessage: (state) => {
      state.error = "Задача не может быть пустой";
    },
    setErrorToZero: (state) => {
      state.error = "";
    },
    fetchTasks: (state, action) => {
      state.taskValue = action.payload;
    },
    addTitle: (state, action) => {
      state.taskValue.push({
        id: crypto.randomUUID(),
        title: action.payload,
        isDone: false,
      });
    },
    editTitle: (state, action) => {
      const { id, text } = action.payload;

      state.taskValue = state.taskValue.map((task) =>
        task.id === id ? { ...task, title: text } : task,
      );
    },
    deleteTitle: (state, action) => {
      state.taskValue = state.taskValue.filter(
        (task) => task.id !== action.payload,
      );
    },
    togglerTask: (state, action) => {
      state.taskValue = state.taskValue.map((task) =>
        task.id === action.payload
          ? { ...task, isDone: !task.isDone }
          : task,
      );
    },
    clearCompetedTask: (state) => {
      state.taskValue = state.taskValue.filter((task) => !task.isDone);
    },
    filterTasks: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  errorMessage,
  setErrorToZero,
  fetchTasks,
  addTitle,
  editTitle,
  deleteTitle,
  togglerTask,
  clearCompetedTask,
  filterTasks,
} = taskSlice.actions;
export default taskSlice.reducer;
