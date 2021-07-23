import data from "./data.json";
import "./index.css";
import "./circle.css";

function Movie({ match }) {
  const movie = data.find((data) => data.slug === match.params.title);

  let flag = true;
  if (movie === undefined) {
    flag = false;
  }

  console.log(flag);
  return flag ? (
    <div className="Movie">
      <div className="validMovie">
        <div>
          <img src={movie.url} alt="img" />
        </div>
        <section>
          <h2>Title: </h2>
          <h1>{movie.name}</h1>
          <h2>Rating: </h2>
          <div class={`c100 p${movie.rating} center small orange`}>
            <span>{movie.rating}%</span>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
          <h2>Description:</h2>
          <h3>{movie.description}</h3>
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

export default Movie;
