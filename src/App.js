import React from "react";
import "./styles.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Register from "./components/screens/Register/Register";
import Login from "./components/screens/Login/Login";
import TestRunning from "./components/screens/TestRunning/TestRunning";
import HomePage from "./components/screens/HomePage/HomePage";
const history = createBrowserHistory();

const App = (
  <AuthProvider>
    <Router history={history}>
      <Switch>
        <div>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/testing" component={TestRunning} />
        </div>
      </Switch>
    </Router>
  </AuthProvider>
);
export default App;
