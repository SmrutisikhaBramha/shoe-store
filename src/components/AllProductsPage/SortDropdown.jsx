import React from 'react';
import './SortDropdown.css';

const SortDropdown = ({ setSortOption }) => {
  const handleChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-select">Recommended by:</label>
      <select id="sort-select" onChange={handleChange}>
        <option value="">Select</option>
        <option value="newest">Newest</option>
        <option value="low-to-high">Price (Low to High)</option>
        <option value="high-to-low">Price (High to Low)</option>
        <option value="a-z">Name A–Z</option>
        <option value="z-a">Name Z–A</option>
      </select>
    </div>
  );
};

export default SortDropdown;
