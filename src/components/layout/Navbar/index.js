import React from "react";
import { Link, useLocation } from "react-router-dom";
import odonto from "../../../assets/images/odonto.png";
import ThemeToggle from "../../common/ThemeToggle";

const Navbar = () => {
  const location = useLocation();

  // Função para verificar se o link está ativo
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={odonto}
            alt="OdontoBot Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          <span className="ms-3">OdontoBot</span>
        </Link>

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
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
                aria-current={isActive("/") ? "page" : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/sobre") ? "active" : ""}`}
                to="/sobre"
              >
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/ajuda") ? "active" : ""}`}
                to="/ajuda"
              >
                Ajuda
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/contato") ? "active" : ""}`}
                to="/contato"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
