import React, { useEffect, useState } from 'react'
import MoviesCard from '../components/MoviesCard';
import Pagination from '../components/Pagination';

function TopRatedPage() {
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);

  useEffect(() =>{
    fetchTopRatedMovies();
  },[currentPage])

  const fetchTopRatedMovies = async () => {
    const movie_url = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${currentPage}
`
    );
    const movie_response = await movie_url.json();
    const movie_data = movie_response.results;
    setMovies(movie_data);
    setTotalPage(movie_response.total_pages);
    // console.log(movie_data);
  };

  const handlePageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
  return (
    <div>
      <div className="movie-list">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
      currentPage = {currentPage}
      totalPages = {totalPages}
      onPageChange = {handlePageChange}/>
    </div>
  )
}

export default TopRatedPage