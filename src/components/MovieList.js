import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, onFavorite, favorites }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <Link to={`/movie/${movie.imdbID}`}>
            <button>Movie Details</button>
          </Link>
          {favorites.some((favMovie) => favMovie.imdbID === movie.imdbID) ? (
            <button onClick={() => onFavorite(movie)}>
              Added to Favorites
            </button>
          ) : (
            <button onClick={() => onFavorite(movie)}>Add to Favorites</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
