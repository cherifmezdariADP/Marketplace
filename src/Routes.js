import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/screens/Login/Login";
import Register from "./components/screens/Register/Register";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Login} />
    </Switch>
  );
}
