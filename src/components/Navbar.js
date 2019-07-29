import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = { fontWeight: "bold", color: "#dfff00" };
  return (
    <section className="App-header">
      <NavLink to="/">Home</NavLink>
      <NavLink
        to="/temperature"
        activeClassName="selected"
        activeStyle={activeStyle}
      >
        Temperature
      </NavLink>
      <NavLink
        to="/customize-image"
        activeClassName="selected"
        activeStyle={activeStyle}
      >
        Customize Image
      </NavLink>
      <NavLink
        to="/celebrities"
        activeClassName="selected"
        activeStyle={activeStyle}
      >
        Celebrities
      </NavLink>
    </section>
  );
}

export default Navbar;
