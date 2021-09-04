import React from "react";
import "./App.scss";

// components
import Topbar from "./components/topbar/Topbar";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="app">
      <Topbar />
      <HomePage />
    </div>
  );
}

export default App;
