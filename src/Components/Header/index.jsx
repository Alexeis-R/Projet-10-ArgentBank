import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/argentBankLogo.png";
import "../../Css/main.css";

function Header() {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          src={Logo}
          className="main-nav-logo-image"
          alt="Argent Bank Logo"
        />
      </NavLink>
      <div>
        <NavLink to="/SignIn" className="main-nav-item">
          <i className="fa fa-user-circle"></i>Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
