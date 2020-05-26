import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../components/Home";
import Login from "../components/Login";
import ShowContainer from "./ShowContainer";

import SavedShowContainer from "./SavedShowContainer";
import "../style/app.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          path="/login"
          render={(routerProps) => <Login {...routerProps} />}
        />
      </Switch>
      <Route exact={true} path="/" component={Home} />

      <ShowContainer />
      <SavedShowContainer />
    </div>
  );
}
export default App;
