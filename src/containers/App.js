import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";

import NavBar from "../components/Navbar";
import Home from "../components/Home";
import ShowContainer from "./ShowContainer";
import SavedShowContainer from "./SavedShowContainer";
import "../style/app.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />

      <ShowContainer />
      <SavedShowContainer />
    </div>
  );
}

export default App;
