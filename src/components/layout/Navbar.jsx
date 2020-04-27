import React, { Component } from "react";

import style from "../layout/Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <span className="h1">
        <a href="/">Lyrkx</a>
      </span>
      <nav>
        <ul className="nav-area">
          <li className="items">
            <a href="/">Home</a>
          </li>
          <li className="items">
            <a href="/profile">Profile</a>
          </li>
          <li className="items">
            <a href="/contact">Contact us</a>
          </li>
          <li className="items">
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
