import React from "react";
import odonto from "../../../assets/images/odonto.png";

const Navbar = () => {
  return (
    <nav className="navbar shadow bg-black fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand mx-auto" href="/">
          <img src={odonto} width="50" height="54" alt="OdontoBot logo" />
          <b className="text-white">OdontoBot</b>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
