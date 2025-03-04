import React from "react";
import odonto from "../../../assets/images/odonto.png";
import ThemeToggle from "../../common/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={odonto}
            alt="OdontoBot Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          <span className="ms-3">OdontoBot</span>
        </a>

        <div className="d-flex align-items-center">
          <ThemeToggle />
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
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
