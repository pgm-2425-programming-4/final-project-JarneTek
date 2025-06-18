import React from "react";

function TaskSearch({ searchText, onSearchChange }) {
  return (
    <div className="task-search-container">
      <input
        className="task-search-input"
        type="text"
        placeholder="Zoek taken op naam..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default TaskSearch;
