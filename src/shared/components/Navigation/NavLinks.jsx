import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All users
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places" exact>
          My places
        </NavLink>
      </li>
      <li>
        <NavLink to="/places/new" exact>
          Add place
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth" exact>
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
