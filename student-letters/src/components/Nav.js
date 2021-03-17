import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="Navbar-container">
      <div className="Navbar">
        <Link to="/">
          <button id="home-button" className="button">
            {" "}
            <h3>Home</h3>
          </button>
        </Link>
        <Link to="/letters">
          <button id="home-button" className="button">
            {" "}
            <h3>Letters</h3>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
