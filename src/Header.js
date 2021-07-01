import React, { useState } from "react";
import "./index.css";
import image from "./logo.svg";
import nav from "./images/nav.png";

function Header() {
  const [navbar, setNav] = useState(false);
  const [dropDown, setDropDown] = useState(true);

  const backgroundChanger = () => {
    if (window.scrollY >= 30) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", backgroundChanger);

  let flag = true;
  const navClick = () => {
    if (dropDown) {
      setDropDown(false);
    } else {
      setDropDown(true);
      flag = true;
    }
  };

  return (
    <div className={navbar ? "Header fixed" : "Header"}>
      <div className="non-drop-down">
        <a href="#">
          <img src={image} width="154px" height="24" />
        </a>
        <span>
          <img src={nav} width="20px" onClick={() => navClick()} />
        </span>
      </div>
      <div className={dropDown ? "drop-down-hidden" : "drop-down"}>
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
    </div>
  );
}

export default Header;
