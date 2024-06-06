// src/utils/localStorage.js
export const loadMoviesFromLocalStorage = () => {
    const movies = localStorage.getItem('movies');
    return movies ? JSON.parse(movies) : [];
  };
  
  export const saveMoviesToLocalStorage = (movies) => {
    localStorage.setItem('movies', JSON.stringify(movies));
  };
  