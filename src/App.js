import "./App.css";
import "./index.css";
import posterOne from "./images/poster1.jpg";
import posterTwo from "./images/poster2.jpg";
import posterThree from "./images/poster3.jpg";

function App() {
  return (
    <div className="App">
      <div className="Images">
        <a href="#">
          <img src={posterOne} alt="posterOne" />
        </a>
        <a href="#">
          <img src={posterTwo} alt="posterTwo" />
        </a>
        <a href="#">
          <img src={posterThree} alt="posterThree" />
        </a>
      </div>
    </div>
  );
}

export default App;
