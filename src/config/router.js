import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../screen/home/home";



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
          <Route exact path="/shop">
           
          </Route>
          <Route exact path="/products">
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
