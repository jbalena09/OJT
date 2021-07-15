import React, { Component } from "react";
import data from "./data.json";
import { Link } from "react-router-dom";

function Movies() {
  return (
    <div className="Movies">
      <div className="Images">
        {data.map((movies, index) => {
          return (
            <Link to={`/Movies/${movies.slug}`}>
              <div>
                <img src={movies.url} alt={`poster-${movies.slug}`} />
                <h1>{movies.name}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
