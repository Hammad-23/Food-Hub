import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../screen/home/home";
import Login from "../screen/Login/login";
import SignUp from "../screen/Signup/signUp";
import Searchbar from "../components/SearchBar/searchbar";
import CheckOut from "../screen/Checkout/checkOuts";
export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/searchbar">
            <Searchbar />
          </Route>
          <Route exact path="/checkout">
            <CheckOut />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
