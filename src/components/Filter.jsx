import React from "react";

const Filter = ({ onFilterChange }) => {
  return (
    <div>
      <div className="filter-container">
        <label>Filter tasks:</label>
        <select onChange={onFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
};
export default Filter;
