import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/screens/Login/Login";
import Register from "./components/screens/Register/Register";
import HomePage from "./components/screens/HomePage/HomePage";
import TestRunning from "./components/screens/TestRunning/TestRunning";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const routing = (
  <Router history={history}>
    <Switch>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/marketplace" component={HomePage} />
        <Route path="/testing" component={TestRunning} />
      </div>
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
