import React from "react";
import brand_logo from "./Image/brand_logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src={brand_logo} alt="" />
      </div>
      <ul>
        <li href="#">Menu </li>
        <li href="#">About</li>
        <li href="#">Location</li>
        <li href="#">Contact</li>
      </ul>
      <button className="login">Login</button>
    </nav>
  );
};

export default Navbar;
