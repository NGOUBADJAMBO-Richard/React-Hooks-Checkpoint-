// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';
import AddMovie from './AddMovie';


const MovieList = ({ movies, addMovie, setFilter, filter }) => {
  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === '' || movie.rating >= parseFloat(filter.rating))
    );
  });

  return (
    <div>
      <AddMovie addMovie={addMovie} />
      <Filter setFilter={setFilter} />
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
