import React from "react";
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
      <button className="loginRegisterButton">Register</button>
    </div>
  );
};

export default LoginPage;
