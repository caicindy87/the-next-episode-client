import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/Navbar";
import ShowContainer from "./ShowContainer";
// import LoginBox from "../components/LoginBox.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ShowContainer />
      </div>
    );
  }
}
export default App;
