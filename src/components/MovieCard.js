import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, onFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    onFavorite(movie);
    setIsFavorite(true);
  };

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`}>
        <button>Movie Details</button>
      </Link>
      {!isFavorite ? (
        <button onClick={handleAddToFavorites}>Add to Favorites</button>
      ) : (
        <button disabled>Added to Favorites</button>
      )}
    </div>
  );
};

export default MovieCard;
