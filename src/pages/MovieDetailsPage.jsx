import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetailsPage() {
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const backDropUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  // const profilePathUrl = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;

  useEffect(() => {
    fetchMovie();
  }, [id]);

  useEffect(() => {
    fetchCast();
  }, []);

  const fetchMovie = async () => {
    const movie_url = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const movie_response = await movie_url.json();
    setMovie(movie_response);
    // console.log(movie);
  };

  const fetchCast = async () => {
    const cast_url = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    const cast_response = await cast_url.json();
    setCast(cast_response.cast);
    console.log(cast);
  };
  return (
    <div className="movie-page">
      <div className="movie-container">
        <div className="movie-left">
          <div className="movie-left-inside">
            <div className="movie-inside-image">
              <img
                src={imageUrl}
                alt={movie.title}
                style={{ width: "100px", height: "auto" }}
              />
            </div>
            <div className="body">
              <p>{movie.title}</p>
              <p style={{ color: "#009fff" }}>Rating: {movie.vote_average}</p>
              <p>Release Date: {movie.release_date}</p>
            </div>
          </div>
          <div className="movie-overview">
            <p>Overview</p>
            <p>{movie.overview}</p>
          </div>
        </div>

        <div className="movie-right">
          <img src={backDropUrl} alt={movie.title} />
        </div>
      </div>


      <h3>Cast</h3>
      <div className="cast-container">
      {
      cast.map((member) =>(
        <img key={member.id}
         src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt="profile"
         style={{ width: "100px", height: "auto", margin: "5px" }}   />
      ))
    }
</div>
    </div>
  );
}

export default MovieDetailsPage;
