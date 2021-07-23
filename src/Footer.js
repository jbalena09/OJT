import "./index.css";
import logo from "./images/logo2.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="social">
        <a href="https://www.themoviedb.org/">
          <img src={logo} height="75px" width="120px" alt="logo" />
        </a>
        <ul>
          <li>
            <a href="https://www.themoviedb.org/">f</a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/">t</a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/">i</a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/">l</a>
          </li>
        </ul>
      </div>
      <div className="info">
        <h3>Support</h3>
        <ul>
          <li>
            <a href="https://www.themoviedb.org/">Contact Us</a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/">FAQ</a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/#">Downloads</a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/">Register</a>
          </li>
        </ul>
      </div>
      <div className="info">
        <h3>TMDb </h3>
        <ul>
          <li>
            <a href="https://www.themoviedb.org/">About TMDb</a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/">Support Forums</a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/">API</a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/">System Status</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
