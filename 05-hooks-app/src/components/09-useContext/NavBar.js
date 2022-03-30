import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to={"/"}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/about"}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/login"}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
