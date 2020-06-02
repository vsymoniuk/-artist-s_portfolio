import React from "react";
import logo from "./logo.png";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="Navbar">
      <NavLink to="/">
        <img src={logo} alt="logo" className="Navbar__logo" />
      </NavLink>
      <div className="Navbar__nav">
        <NavLink className="link" to="/about">About</NavLink>
        <NavLink className="link" to="/gallery">Gallery</NavLink>
        <NavLink className="link" to="/contact">Contact</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
