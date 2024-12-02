import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-auto py-3">
      <div className="container text-center">
        <span>
          &copy; {new Date().getFullYear()} OdontoBot. Todos os direitos
          reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
