import React from "react";
import "./styles.css";
import { Router } from "react-router-dom";

import Register from "./components/screens/Register/Register";
import Login from "./components/screens/Login/Login";
import TestRunning from "./components/screens/TestRunning/TestRunning";
import HomePage from "./components/screens/HomePage/HomePage";
import Routes from "./Routes";

export default function App() {
  return <HomePage />;
}
