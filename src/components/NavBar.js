import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="navbar">
            <nav>
                <NavLink to="/" className="nav-link">Search</NavLink>
                <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
            </nav>
        </header>
    );
}
