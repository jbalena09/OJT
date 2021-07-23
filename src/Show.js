import "./index.css";
import "./circle.css";
import React, { useState, useEffect } from "react";
import api from "./movies_api";

function Show({ match }) {
  useEffect(() => {
    search();
  }, []);

  const [searchData, setSearch] = useState([]);
  const id = searchData.id;

  const search = async () => {
    const data = await fetch(
      `${api.search}${match.params.title}?api_key=${api.key}`
    );
    const searchData = await data.json();
    setSearch(searchData);
  };

  let flag = true;
  id == match.params.title ? (flag = true) : (flag = false);
  return flag ? (
    <div className="Show">
      <div className="validMovie">
        <div>
          <img src={api.imgUrl + searchData.poster_path} alt="img" />
        </div>
        <section>
          <h2>Title: </h2>
          <h1>{searchData.title}</h1>
          <h2>Rating: </h2>
          <div
            class={`c100 p${searchData.vote_average * 10} center small orange`}
          >
            <span>{searchData.vote_average * 10}%</span>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
          <h2>Description:</h2>
          <h3>{searchData.overview}</h3>
        </section>
      </div>
    </div>
  ) : (
    <div className="Movie">
      <div className="invalidMovie">
        <h1>Invalid Movie Title.. </h1>
        <h1>Movie doesn't exist!</h1>
      </div>
    </div>
  );
}

export default Show;
