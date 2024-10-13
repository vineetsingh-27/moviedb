import React from "react";
import { Link } from "react-router-dom";

function MoviesCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  // console.log(movie);

  return (
    <>
      <Link to={`/movie/${movie.id}`} className="link-text">
        <div className="movie-card">
          <img className="movie-image" src={imageUrl} alt={movie.title} />
          <p className="movie-title">{movie.title}</p>
        </div>
      </Link>
    </>
  );
}

export default MoviesCard;
