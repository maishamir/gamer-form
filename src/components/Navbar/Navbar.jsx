import React from "react";
import logo from "../../assets/images/logo.svg"
import "./Navbar.scss"

function Navbar() {
  return <header className="navbar">
    <img src={logo} alt="" />
    <p className="navbar__steps">0 / 5 ready</p>
  </header>
}

export default Navbar;
