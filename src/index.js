import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import App from "./containers/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// <Switch>
//   <Route exact path="/" component={Home} />
//   <Route path="/about" component={Show} />
//   <Route path="/showlist" component={ShowsList} />
// </Switch>
