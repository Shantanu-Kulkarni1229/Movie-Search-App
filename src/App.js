// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import { fetchMovies } from "./api";
import "./index.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetchMovies(query);
    setMovies(response.data.Search);
  };

  const handleFavorite = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
  };

  const handleRemoveFavorite = (movie) => {
    const updatedFavorites = favorites.filter(
      (favMovie) => favMovie.imdbID !== movie.imdbID
    );
    setFavorites(updatedFavorites);
  };

  const featuredMovies = [
    {
      Title: "The Shawshank Redemption",
      Year: "1994",
      imdbID: "tt0111161",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    },
    {
      Title: "The Godfather",
      Year: "1972",
      imdbID: "tt0068646",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/I/51c6S4kGFmL._AC_.jpg",
    },
  ];

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/" className="logo">
            Movie Explorer
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <header>
          <h1>Movie Explorer</h1>
          <p>Discover your favorite movies</p>
        </header>
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="featured-movies">
                  <h2>Featured Movies</h2>
                  <MovieList
                    movies={featuredMovies}
                    onFavorite={handleFavorite}
                    favorites={favorites}
                  />
                </section>
                <MovieList
                  movies={movies}
                  onFavorite={handleFavorite}
                  favorites={favorites}
                />
              </>
            }
          />
          <Route
            path="/favorites"
            element={
              <>
                <h2>Favorites</h2>
                <MovieList
                  movies={favorites}
                  onFavorite={handleRemoveFavorite}
                  favorites={favorites}
                />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        <footer>
          <p>&copy; 2024 Movie Explorer. All rights reserved.</p>
          <p>
            <a href="https://www.omdbapi.com/">OMDB API</a> used for movie data.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
