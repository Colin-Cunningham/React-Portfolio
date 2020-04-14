import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav  id="nav" className="navbar navbar-expand-lg  ">
      <Link id="brand" className="navbar-brand" to="/">
        Colin Cunningham
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/projects"
              className={
                window.location.pathname === "/projects" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;