import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header>
    <nav className="navbar navbar-dark fixed-top bg-dark">
      <Link className="navbar-brand" to="/">
        {" "}
        Awesome Sweepstakes{" "}
      </Link>
      <ul className="navbar-nav y-2 my-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to = "/orderstatuslookup">
            {" "}
            Check Processing Status{" "}
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
