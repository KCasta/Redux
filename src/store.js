import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

// Create a store
const store = configureStore({
  reducer: {
    todoTasks: todoReducer,
  },
});
export default store;
