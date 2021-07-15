import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import Footer from "./Footer";
import reactDom from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById("header")
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);

reactDom.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById("footer")
);
reportWebVitals();
