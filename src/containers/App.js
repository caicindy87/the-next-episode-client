import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/Navbar";
import ShowContainer from "./ShowContainer";
import LoginBox from "./LoginBox.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
    };
  }
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
