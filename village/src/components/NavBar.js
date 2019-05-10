import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

const NavBar = () => {
  return (
    <div className="nav">
      <NavLink to={"/"}>My Smurf Village</NavLink>
      <NavLink to={"/smurf-form"}>Add a Smurf</NavLink>
    </div>
  );
};

export default NavBar;
