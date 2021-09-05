import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

// components
import Topbar from "./components/topbar/Topbar";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import SettingsPage from "./pages/settingsPage/Settings";
import SinglePage from "./pages/singlePage/SinglePage";
import WritePage from "./pages/writePage/Write";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/write" component={WritePage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/post/:postId" component={SinglePage} />
        <Route exact path="/" component={HomePage} />
        <Route path="*" render={() => <h1>Nothing to see there.</h1>} />
      </Switch>
    </div>
  );
}

export default App;
