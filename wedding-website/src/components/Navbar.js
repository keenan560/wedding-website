import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light position-sticky overflow-hidden shadow navbar__container">
      <div className="container-fluid">
        <a className="navbar-brand navbar__logo" href="/">
          Keenan <span className="heart">&hearts;</span> Diana
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/our-story"
              >
                Our story
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/photos">
                Photos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/party">
                Party
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registry">
                Registry
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/booking">
                Booking
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/travel
              "
              >
                Travel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/questions">
                Q&A
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
