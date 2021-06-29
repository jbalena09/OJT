import "./index.css";
import logo from "./images/logo2.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="social">
        <a href="#">
          <img src={logo} height="75px" width="120px" />
        </a>
        <ul>
          <li>
            <a href="#">f</a>
          </li>
          <li>
            <a href="#">t</a>
          </li>
          <li>
            <a href="#">i</a>
          </li>
          <li>
            <a href="#">l</a>
          </li>
        </ul>
      </div>
      <div className="info">
        <h3>Support</h3>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Downloads</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </div>
      <div className="info">
        <h3>TMDb </h3>
        <ul>
          <li>
            <a href="#">About TMDb</a>
          </li>
          <li>
            <a href="#">Support Forums</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">System Status</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
