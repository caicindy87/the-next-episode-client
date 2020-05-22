import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/show" exact>
        Show
      </NavLink>
      <NavLink to="/showlist" exact>
        Show List
      </NavLink>
    </div>
  );
};

export default NavBar;
