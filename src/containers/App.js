import React from "react";
import { Route } from "react-router-dom";

import NavBar from "../components/Navbar";
import Home from "../components/Home";
import ShowContainer from "./ShowContainer";
import SavedShowContainer from "./SavedShowContainer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact={true} path="/" component={Home}></Route>

      {/* <ShowContainer /> */}
      <SavedShowContainer />
    </div>
  );
}

export default App;
