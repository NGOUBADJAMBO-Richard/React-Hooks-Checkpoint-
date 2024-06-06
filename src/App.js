// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { loadMoviesFromLocalStorage, saveMoviesToLocalStorage } from './utils/localStorage';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://image.url/inception.jpg',
      rating: 8.8,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    
    {
      id: 2,
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      posterURL: 'https://image.url/matrix.jpg',
      rating: 8.7,
      trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    },
    {
      id: 3,
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      posterURL: 'https://image.url/matrix.jpg',
      rating: 8.7,
      trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    },
    {
      id: 4,
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      posterURL: 'https://image.url/matrix.jpg',
      rating: 8.7,
      trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    },
    {
      id: 5,
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      posterURL: 'https://image.url/matrix.jpg',
      rating: 8.7,
      trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    },
    {
      id: 6,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://image.url/interstellar.jpg',
      rating: 8.6,
      trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    },
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const addMovie = (newMovie) => {
    newMovie.id = movies.length + 1;
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <div className="App">
        <h1>My Favorite Movies</h1>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} addMovie={addMovie} setFilter={setFilter} filter={filter} />} />
          <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

