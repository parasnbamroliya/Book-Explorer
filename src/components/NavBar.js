import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-title">
        📚 Book Explorer
      </Link>
      <nav className="navbar-links">
        <NavLink to="/" className="nav-link">
          Search
        </NavLink>
        <NavLink to="/favorites" className="nav-link">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}
