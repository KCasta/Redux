import React from "react";
import "./Task.css";
import { useDispatch } from "react-redux";
import { removeTask } from "../slices/todoSlice";
import { toggleCompleted } from "../slices/todoSlice";

const Task = ({ task, editTask }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeTask(task));
  };
  const toggleHandler = () => {
    dispatch(toggleCompleted(task));
  };
  return (
    <div className="tasks-list">
      <div>
        <h3 className="tasks-item">{task.name}</h3>
        <p className="tasks-item">{task.completed}</p>
      </div>
      <div className="task-actions">
        <button
          onClick={() => {
            editTask(task);
          }}
        >
          Edit
        </button>
        <button className="remove-button" onClick={removeHandler}>
          Remove
        </button>
        <label htmlFor="">
          {task.completed ? "Mark as undone" : "Mark as done"}
        </label>
        <input
          className="task-checkbox"
          type="checkbox"
          checked={task.completed}
          onChange={toggleHandler}
        />
      </div>
    </div>
  );
};

export default Task;
