import React, { useEffect, useState } from "react";
import MoviesCard from "../components/MoviesCard";
import { useLocation } from "react-router-dom";

const MovieSearch = () => {
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

  const [movies, setMovies] = useState([]);
  const location = useLocation();
  let query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    searchMovies();
  }, [query]);

  const searchMovies = async () => {
    const movie_url = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
    );
    const movie_response = await movie_url.json();
    const movie_data = movie_response.results;
    setMovies(movie_data);
    // console.log(movie_data);
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieSearch;
