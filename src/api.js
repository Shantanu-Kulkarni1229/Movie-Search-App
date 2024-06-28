import axios from "axios";

const API_KEY = "834bee//5a";

const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export const fetchMovies = (query) => api.get(`?s=${query}&apikey=${API_KEY}`);

export const fetchMovieDetails = (id) => api.get(`?i=${id}&apikey=${API_KEY}`);
