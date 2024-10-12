import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  filter: "all",
};
// Create a slice
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      console.log(payload);
      state.tasks.push(payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload.id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleCompleted: (state, { payload }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === payload.id) {
          task.completed = !task.completed;
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    editTask: (state, { payload }) => {
      console.log(payload, "edit task");
      state.tasks = state.tasks.map((task) => {
        if (task.id === payload.id) {
          return payload;
        }
        return task;
      });
      console.log(state.tasks);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const { addTask, removeTask, toggleCompleted, editTask, setFilter } =
  todoSlice.actions;

export default todoSlice.reducer;
