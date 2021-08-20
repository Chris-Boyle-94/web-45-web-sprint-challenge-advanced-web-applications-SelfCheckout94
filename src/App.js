import "./styles.scss";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useState } from "react";

import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { axiosWithAuth } from "./helpers/axiosWithAuth";

function App() {
  const logout = () => {
    axiosWithAuth()
      .post("/logout")
      .then(() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      });
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <Link to="/login">login</Link>
          <a data-testid="logoutButton" onClick={logout}>
            logout
          </a>
        </header>
        <Switch>
          <PrivateRoute path="/bubbles" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
