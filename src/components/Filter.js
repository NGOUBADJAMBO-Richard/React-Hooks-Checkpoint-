// src/components/Filter.js
import React from 'react';


const Filter = ({ setFilter }) => {
  const handleTitleChange = (event) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      title: event.target.value,
    }));
  };

  const handleRatingChange = (event) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      rating: event.target.value,
    }));
  };

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Search by rating"
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
