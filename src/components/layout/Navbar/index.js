import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
import lightLogo from "../../../assets/images/logo-light.png";
import darkLogo from "../../../assets/images/logo-dark.png";
import "./styles.css";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  // Função para verificar se o link está ativo
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={darkMode ? lightLogo : darkLogo}
            alt="OdontoBot Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold">OdontoBot</span>
        </Link>

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
              <Link className={`nav-link ${isActive("/")}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/sobre")}`} to="/sobre">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/ajuda")}`} to="/ajuda">
                Ajuda
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/contato")}`}
                to="/contato"
              >
                Contato
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-theme-toggle ms-2"
            onClick={toggleDarkMode}
            aria-label={
              darkMode ? "Mudar para modo claro" : "Mudar para modo escuro"
            }
          >
            <i className={`bi ${darkMode ? "bi-sun" : "bi-moon"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
