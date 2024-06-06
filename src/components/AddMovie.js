// src/components/AddMovie.js
import React, { useState } from 'react';


const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
    trailer: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
      trailer: '',
    });
  };

  return (
    <div className="AddMovie">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newMovie.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={newMovie.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="text"
          name="posterURL"
          value={newMovie.posterURL}
          placeholder="Poster URL"
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          value={newMovie.rating}
          placeholder="Rating"
          onChange={handleChange}
        />
        <input
          type="text"
          name="trailer"
          value={newMovie.trailer}
          placeholder="Trailer URL"
          onChange={handleChange}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
