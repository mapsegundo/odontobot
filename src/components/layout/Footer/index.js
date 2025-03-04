import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import "./styles.css";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`footer ${darkMode ? "footer-dark" : "footer-light"}`}>
      <div className="container text-center">
        <span>
          &copy; {new Date().getFullYear()} OdontoBot. Todos os direitos
          reservados.
        </span>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/marshallpaiva"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            Marshall Paiva
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
