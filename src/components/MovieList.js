// src/components/MovieList.js
import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';
import AddMovie from './AddMovie';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://image.url/inception.jpg',
      rating: 8.8,
      director: 'Christopher Nolan',
    },
    {
      id: 2,
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      posterURL: 'https://image.url/matrix.jpg',
      rating: 8.7,
      directors: 'The Wachowskis',
    },
    {
      id: 3,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://image.url/interstellar.jpg',
      rating: 8.6,
      director: 'Christopher Nolan',
    },
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const addMovie = (newMovie) => {
    newMovie.id = movies.length + 1;
    setMovies([...movies, newMovie]);
  };

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
