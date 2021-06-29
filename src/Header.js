import "./index.css";
import image from "./logo.svg";

function Header() {
  return (
    <div className="Header">
      <a href="#">
        <img src={image} width="154px" height="24" />
      </a>
      <ul>
        <li>
          <a href="#" className="list">
            Movies
          </a>
        </li>
        <li>
          <a href="#" className="list">
            Tv Show
          </a>
        </li>
        <li>
          {" "}
          <a href="#" className="list">
            More
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
