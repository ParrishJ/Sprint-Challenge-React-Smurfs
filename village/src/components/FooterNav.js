import React from "react"; // This footer is here to meet the Link requirements
import { Link } from "react-router-dom";

import "./nav.css";

const FooterNav = () => {
  return (
    <div className="nav">
      <Link to={"/"}>My Smurf Village</Link>
      <Link to={"/smurf-form"}>Add a Smurf</Link>
    </div>
  );
};

export default FooterNav;
