import React from "react";
import logo from "./logo.png";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const navlinks = [
    { to: "/about", name: "About" },
    { to: "/gallery", name: "Gallery" },
    { to: "/contact", name: "Contact" },
  ];

  if (props.isAuthenticated) {
    navlinks.push({ to: "/create", name: "Create" });
    navlinks.push({ to: "/logout", name: "Logout" });
  }

  return (
    <header className="Navbar">
      <NavLink to="/">
        <img src={logo} alt="logo" className="Navbar__logo" />
      </NavLink>
      <div className="Navbar__nav">
        {navlinks.map((item) => (
          <NavLink key={item.to + Date.now()} className="link" to={item.to}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
