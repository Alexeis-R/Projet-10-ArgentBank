import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/authAction";
import Logo from "../../../public/argentBankLogo.png";
import "../../Css/main.css";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/signin");
  };

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
        {token ? (
          <NavLink to="/" onClick={handleLogout} className="main-nav-item">
            <i className="fa fa-user-circle"></i>Sign Out
          </NavLink>
        ) : (
          <NavLink to="/SignIn" className="main-nav-item">
            <i className="fa fa-user-circle"></i>Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;
