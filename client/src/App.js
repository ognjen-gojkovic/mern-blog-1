import React from "react";
import "./App.scss";

// components
import Topbar from "./components/topbar/Topbar";
import HomePage from "./pages/homePage/HomePage";
import SinglePage from "./pages/singlePage/SinglePage";
import Write from "./pages/writePage/Write";

function App() {
  return (
    <div className="app">
      <Topbar />
      {/* <HomePage /> */}
      {/* <SinglePage />*/}
      <Write />
    </div>
  );
}

export default App;
