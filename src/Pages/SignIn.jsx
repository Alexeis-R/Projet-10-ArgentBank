import React from "react";
import "../Css/main.css";
import Layout from "../Components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Store/authActions";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleSumit = (e) => {
    console.log("test");
    e.preventDefault();
    dispatch(
      login({
        user: { email: "tony@stark.com" },
        password: { password: "password123" },
      })
    );
    if (isAuthenticated) {
      navigate("/user");
    }
  };

  return (
    <Layout>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="sign-in-button" onClick={(e) => handleSumit(e)}>
              Sign In
            </div>
          </form>
        </section>
      </main>
    </Layout>
  );
}

export default SignIn;
