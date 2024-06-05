// src/App.js
import React from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <h1>My Favorite Movies</h1>
      <MovieList />
    </div>
  );
}

export default App;
