import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
import odonto from "../../../assets/images/odonto.png";
import "./styles.css";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Função para verificar se o link está ativo
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  // Função para alternar o estado do menu
  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  // Função para fechar o menu quando um link é clicado
  const closeNav = () => {
    setIsNavExpanded(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={closeNav}
        >
          <img
            src={odonto}
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
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isNavExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavExpanded ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/")}`}
                to="/"
                onClick={closeNav}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/sobre")}`}
                to="/sobre"
                onClick={closeNav}
              >
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/ajuda")}`}
                to="/ajuda"
                onClick={closeNav}
              >
                Ajuda
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/contato")}`}
                to="/contato"
                onClick={closeNav}
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
