import React from "react";
import logo from './logo.png'
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="Navbar">
      <img src={logo} alt="logo" className="Navbar__logo"/>
      <nav className="Navbar__nav">
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
