import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;

    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MovieDb
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                to="/" 
                className="nav-link"
                 aria-current="page"
                 style={{
                  color: selected === "popular" ? "#00bcd4" : "#ccc",
                }}
                onClick={() => setSelected("popular")}
                 >
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/top-rated" className="nav-link"
                style={{
                  color: selected === "top-rated" ? "#00bcd4" : "#ccc",
                }}
                onClick={() => setSelected("top-rated")}>
                  Top Rated
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/upcoming-movie" className="nav-link"
                style={{
                  color: selected === "upcoming-movie" ? "#00bcd4" : "#ccc",
                }}
                onClick={() => setSelected("upcoming-movie")}>
                  Upcoming
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Movie Name"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
