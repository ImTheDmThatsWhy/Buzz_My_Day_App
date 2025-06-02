import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <navbar className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
        <li>
          <a href="/favourites">Favourites</a>
        </li>

        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/reviews">Reviews</a>
        </li>
        <li className="nav-right">
          <a href="/account">Account</a>
        </li>
      </ul>
    </navbar>
  );
};

export default Nav;
