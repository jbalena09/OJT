import React, { useState, useEffect } from "react";
import api from "./movies_api.ts";
import { Link } from "react-router-dom";

function Shows() {
  useEffect(() => {
    topPopular();
    topRated();
    Upcoming();
  }, []);

  const [popular, setPopular] = useState([]);
  const [rated, setRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const topPopular = async () => {
    const data = await fetch(api.topPopular);
    const popular = await data.json();
    // console.log(popular);
    setPopular(popular.results);
  };

  const topRated = async () => {
    const data = await fetch(api.topRated);
    const rated = await data.json();
    setRated(rated.results);
  };

  const Upcoming = async () => {
    const data = await fetch(api.newMovies);
    const upcoming = await data.json();
    setUpcoming(upcoming.results);
  };

  return (
    <div className="Shows">
      <div className="row">
        <h1>Top 10 Popular Movies</h1>
        <div className="movies">
          {popular.slice(0, 5).map((movie) => {
            return (
              <Link to={`/Show/${movie.id}`}>
                <img src={api.imgUrl + movie.poster_path} alt={movie.id} />
                <h3>{movie.title}</h3>
              </Link>
            );
          })}
        </div>
        <div className="movies">
          {popular.slice(5, 10).map((movie) => {
            return (
              <Link to={`/Show/${movie.id}`}>
                <img src={api.imgUrl + movie.poster_path} alt={movie.id} />
                <h3>{movie.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="row">
        <h1>Top 10 Top-Rated Movies</h1>
        <div className="movies">
          {rated.slice(0, 5).map((movie) => {
            return (
              <Link to={`/Show/${movie.id}`}>
                <img src={api.imgUrl + movie.poster_path} alt={movie.id} />
                <h3>{movie.title}</h3>
              </Link>
            );
          })}
        </div>
        <div className="movies">
          {rated.slice(5, 10).map((movie) => {
            return (
              <Link to={`/Show/${movie.id}`}>
                <img src={api.imgUrl + movie.poster_path} alt={movie.id} />
                <h3>{movie.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="row">
        <h1>Top 10 Upcoming Movies</h1>
        <div className="movies">
          {upcoming.slice(0, 5).map((movie) => {
            return (
              <Link to={`/Show/${movie.id}`}>
                <img src={api.imgUrl + movie.poster_path} alt={movie.id} />
                <h3>{movie.title}</h3>
              </Link>
            );
          })}
        </div>
        <div className="movies">
          {upcoming.slice(5, 10).map((movie) => {
            return (
              <Link to={`/Show/${movie.id}`}>
                <img src={api.imgUrl + movie.poster_path} alt={movie.id} />
                <h3>{movie.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shows;
