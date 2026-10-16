import React from 'react';

function Filter({ department, setDepartment }) {
  return (
    <div className="filter">
      <label>Filter by Department: </label>

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="IT">IT</option>
        <option value="EEE">EEE</option>
      </select>
    </div>
  );
}

export default Filter;