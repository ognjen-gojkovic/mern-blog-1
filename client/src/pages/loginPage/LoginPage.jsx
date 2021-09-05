import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email:</label>
        <input type="email" placeholder="email..." />
        <label>Password:</label>
        <input type="password" placeholder="password..." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
};

export default LoginPage;
