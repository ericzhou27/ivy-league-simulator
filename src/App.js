import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Apply from "./components/apply";
import Results from "./components/results";
import Conclusions from "./components/conclusions";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/conclusions" component={Conclusions}></Route>
        <Route path="/results" component={Results}></Route>
        <Route path="/">
          <Apply />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
