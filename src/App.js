import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Appointment from "./pages/Appointments/Appointment/Appointment";
import Login from "./pages/LogIn/Login/Login";
import Register from "./pages/LogIn/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import NavBar from "./pages/Shared/NavBar/NavBar";
import Footer from "./pages/Shared/Footer/Footer";
import PrivateRoute from "./pages/LogIn/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
