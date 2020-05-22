import React from "react";
import { Route } from "react-router-dom";

import NavBar from "../components/Navbar";
import ShowContainer from "./ShowContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ShowContainer />
    </div>
  );
}

export default App;
