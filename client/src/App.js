import React from "react";
import "./App.scss";

// components
import Topbar from "./components/topbar/Topbar";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import Settings from "./pages/settingsPage/Settings";
import SinglePage from "./pages/singlePage/SinglePage";
import Write from "./pages/writePage/Write";

function App() {
  return (
    <div className="app">
      <Topbar />
      {/* <HomePage /> */}
      {/* <SinglePage /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <LoginPage /> */}
      <RegisterPage />
    </div>
  );
}

export default App;
