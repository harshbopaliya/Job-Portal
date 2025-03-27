import React from "react";

const Filters = () => {
  return (
    <div className="filters">
      <h3>Job Filters</h3>
      <div className="filter-item">
        <label>Job Type</label>
        <select>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Freelance</option>
        </select>
      </div>
      <div className="filter-item">
        <label>Experience Level</label>
        <select>
          <option>Entry</option>
          <option>Mid</option>
          <option>Senior</option>
        </select>
      </div>
      <div className="filter-item">
        <label>Location</label>
        <input type="text" placeholder="Search location" />
      </div>
    </div>
  );
};

export default Filters;
