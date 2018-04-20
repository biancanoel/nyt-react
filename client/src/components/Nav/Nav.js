import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav =() => (

  
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <ul className="nav nav-tabs">

    <li className="nav-item">
      <Link
        to="/search"
        className={
          window.location.pathname === "/search" ? "nav-link active" : "nav-link"
        }
      >
        Search Articles 
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/saved"
        className={
          window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
        }
      >
       All Saved Articles
      </Link>
    </li>



  </ul>
  </nav>
);

export default Nav;