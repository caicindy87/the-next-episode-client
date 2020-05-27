import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../components/Home";
import Login from "../components/Login";
import ShowContainer from "./ShowContainer";

import SavedShowContainer from "./SavedShowContainer";
import "../style/app.css";

// In the route we are passing down our handleLogin to our login component

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      api.auth.getCurrentUser().then((user) => {
        const currentUser = { currentUser: user };

        this.setState({ auth: currentUser });
      });
    }
  }

  handleLogin = (user) => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.token);

    this.setState({ auth: currentUser });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* Switch will render route exclusively */}
        <Switch>
          <Route
            path="/login"
            render={(routerProps) => {
              return <Login {...routerProps} handleLogin={this.handleLogin} />;
            }}
          />
        </Switch>
        <Route exact={true} path="/" component={Home} />

        <ShowContainer />
        <SavedShowContainer />
      </div>
    );
  }
}
export default App;
