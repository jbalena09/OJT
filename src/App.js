import "./App.css";
import "./index.css";
import Movies from "./Movies";
import Shows from "./Shows";
import Show from "./Show";
import More from "./More";
import Movie from "./Movie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Movies" exact component={Movies} />
          <Route path="/Movies/:title" component={Movie} />
          <Route path="/Show" exact component={Shows} />
          <Route path="/Show/:title" component={Show} />
          <Route path="/More" component={More} />
          <Route path="*" component={Invalid} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="Home">
    <h2>Hello Welcome to The Movie Database Homepage</h2>
    <h2>Currently there's nothing here yet to see</h2>
    <h2>
      please proceed to{" "}
      <a href="/Movies">
        <u>movies</u>
      </a>{" "}
      page
    </h2>
  </div>
);

const Invalid = () => (
  <div className="invalid">
    <h2>Invalid address.. </h2>
    <h2>There is no such thing as this address :)</h2>
  </div>
);

export default App;
