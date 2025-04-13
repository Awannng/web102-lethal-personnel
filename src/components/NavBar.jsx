import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to={"/"} className="tab">
        Home
      </Link>
      <Link to={"/create"} className="tab">
        Create
      </Link>

      <Link to={"/view"} className="tab">
        Gallery
      </Link>
    </div>
  );
};

export default NavBar;
