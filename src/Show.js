import React, { useState, useEffect } from "react";
import api from "./movies_api.ts";
function Show() {
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
    <div className="Show">
      <div className="row">
        <h1>Top 10 Popular Movies</h1>
        <div className="movies">
          {popular.slice(0, 5).map((movie) => {
            return (
              <a href={api.url + movie.id} target="_blank" rel="noreferrer">
                <img src={api.imgUrl + movie.poster_path} alt={movie.id} />
                <h3>{movie.title}</h3>
              </a>
            );
          })}
        </div>
        <div className="movies">
          {popular.slice(5, 10).map((movie) => {
            return (
              <a href={api.url + movie.id} target="_blank" rel="noreferrer">
                <img src={api.imgUrl + movie.poster_path} alt={movie.id} />
                <h3>{movie.title}</h3>
              </a>
            );
          })}
        </div>
      </div>
      <div className="row">
        <h1>Top 10 Top-Rated Movies</h1>
        <div className="movies">
          {rated.slice(0, 5).map((movie) => {
            return (
              <a href={api.url + movie.id} target="_blank" rel="noreferrer">
                <img src={api.imgUrl + movie.poster_path} alt={movie.id} />
                <h3>{movie.title}</h3>
              </a>
            );
          })}
        </div>
        <div className="movies">
          {rated.slice(5, 10).map((movie) => {
            return (
              <a href={api.url + movie.id} target="_blank" rel="noreferrer">
                <img src={api.imgUrl + movie.poster_path} alt={movie.id} />
                <h3>{movie.title}</h3>
              </a>
            );
          })}
        </div>
      </div>
      <div className="row">
        <h1>Top 10 Upcoming Movies</h1>
        <div className="movies">
          {upcoming.slice(0, 5).map((movie) => {
            return (
              <a href={api.url + movie.id} target="_blank" rel="noreferrer">
                <img src={api.imgUrl + movie.poster_path} alt={movie.id} />
                <h3>{movie.title}</h3>
              </a>
            );
          })}
        </div>
        <div className="movies">
          {upcoming.slice(5, 10).map((movie) => {
            return (
              <a href={api.url + movie.id} target="_blank" rel="noreferrer">
                <img src={api.imgUrl + movie.poster_path} alt={movie.id} />
                <h3>{movie.title}</h3>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Show;
