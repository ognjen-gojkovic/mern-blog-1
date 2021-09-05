import React from "react";
import "./RegisterPage.scss";

const RegisterPage = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username:</label>
        <input type="text" placeholder="username..." />
        <label>Email:</label>
        <input type="email" placeholder="email..." />
        <label>Password:</label>
        <input type="password" placeholder="password..." />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
};

export default RegisterPage;
