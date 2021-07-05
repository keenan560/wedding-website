import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar__container">
      <a href="/" className="navbar__link">
        Home
      </a>
      <a href="/" className="navbar__link">
        Our Story
      </a>
      <a href="/" className="navbar__link">
        Photos
      </a>
      <a href="/" className="navbar__link">
        Wedding Party
      </a>
      <a href="/" className="navbar__link">
        Q + A
      </a>
      <a href="/" className="navbar__link">
        Travel
      </a>
      <a href="/" className="navbar__link">
        Things to Do
      </a>
      <a href="/" className="navbar__link">
        Registry
      </a>
    </div>
  );
}

export default Navbar;
