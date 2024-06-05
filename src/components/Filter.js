// src/components/Filter.js
import React, { useState } from 'react';

const Filter = ({ setFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setFilter((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    setFilter((prev) => ({ ...prev, rating: e.target.value }));
  };

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
        step="0.1"
      />
    </div>
  );
};

export default Filter;
