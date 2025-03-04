import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-auto py-3">
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
          >
            Marshall Paiva
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
