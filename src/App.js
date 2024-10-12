import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TasksLists from "./components/TasksLists";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilter } from "./slices/todoSlice";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Filter from "./components/Filter";
const App = () => {
  const dispatch = useDispatch();
  // Use the useSelector hook to get the tasks from the store
  const { tasks, filter } = useSelector((state) => state.todoTasks);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const editTaskHandler = (task) => {
    setTaskToEdit(task);
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }
    if (filter === "incomplete") {
      return !task.completed;
    }
    return true;
  });
  console.log(tasks);
  const filterHandler = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className="main-container">
      <Toaster />
      <div className="container">
        <AddTaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
        <Filter onFilterChange={filterHandler} />
        <TasksLists tasks={filteredTasks} onEditTask={editTaskHandler} />
      </div>
    </div>
  );
};

export default App;
