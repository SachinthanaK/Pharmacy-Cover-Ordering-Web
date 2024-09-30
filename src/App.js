import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./home/Home.jsx";
import Login from "./login/Login.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/orderhistory" exact></Route>
        <Route path="/places/new" exact></Route>
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};
export default App;
