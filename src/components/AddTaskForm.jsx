import React from "react";
import { useState } from "react";
import "./AddTaskForm.css";
import { addTask, editTask } from "../slices/todoSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";

const AddTaskForm = ({ taskToEdit, setTaskToEdit }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    description: "",
    completed: false,
    id: new Date().getTime(),
  });
  const dispatch = useDispatch();
  // useEffect to update the input values when the taskToEdit changes
  useEffect(() => {
    if (taskToEdit) {
      console.log();
      setInputValues(taskToEdit);
    }
  }, [taskToEdit]);

  const handleValidation = (values) => {
    if (values.name.trim() === "" || values.description.trim() === "") {
      toast.error("Please fill in all fields");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const success = handleValidation(inputValues);
    console.log(taskToEdit);
    console.log(success);
    if (!success) {
      return;
    }
    console.log(inputValues);
    const timestamp = new Date().getTime();
    // Update input values to have an id
    setInputValues({ ...inputValues, id: timestamp });
    if (taskToEdit) {
      dispatch(editTask(inputValues));
      setTaskToEdit(null);
    } else {
      dispatch(addTask(inputValues));
    }

    setInputValues({
      name: "",
      description: "",
      completed: false,
      id: new Date().getTime,
    });
    toast.success("Task added successfully");
  };
  return (
    <form className="form-container" onSubmit={submitHandler}>
      <div className="input-task">
        <label htmlFor="inputTask">Task name</label>
        <input
          id="todo-text"
          type="text"
          placeholder="Enter task name"
          value={inputValues.name}
          onChange={(e) => {
            setInputValues({ ...inputValues, name: e.target.value });
          }}
        />
        <label htmlFor="task-description">Task Description</label>
        <textarea
          id="task-description"
          placeholder="Enter task description"
          value={inputValues.description}
          onChange={(e) => {
            setInputValues({ ...inputValues, description: e.target.value });
          }}
        ></textarea>
      </div>
      <button className="add-btn">
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default AddTaskForm;
