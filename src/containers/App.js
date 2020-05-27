import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../components/Home";
import Login from "../components/Login";
import ShowContainer from "./ShowContainer";
import api from "../services/api";

import SavedShowContainer from "./SavedShowContainer";
import "../style/app.css";

class App extends React.Component {
  state = {
    auth: { currentUser: {} },
    savedShows: [],
  };

  fetchShows = () => {
    fetch("http://localhost:3000/api/v1/saved_shows")
      .then((resp) => resp.json())
      .then((data) => this.setState({ savedShows: data }));
  };

  componentDidMount() {
    this.fetchShows();
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

  handleAddReview = (savedShowId, review) => {
    this.setState((prevState) => ({
      savedShows: prevState.savedShows.map((s) =>
        s.id === savedShowId ? { ...s, reviews: [...s.reviews, review] } : s
      ),
    }));
  };

  handleDeleteReview = (savedShowId, reviewId) => {
    fetch(`http://localhost:3000/api/v1/reviews/${reviewId}`, {
      method: "DELETE",
    });

    this.setState((prevState) => ({
      savedShows: prevState.savedShows.map((s) =>
        s.id === savedShowId
          ? { ...s, reviews: s.reviews.filter((r) => r.id !== reviewId) }
          : s
      ),
    }));
  };

  handleSavingShow = (show) => {
    this.setState((prevState) => ({
      savedShows: [...prevState.savedShows, show],
    }));
  };

  handleRemovingSavedShow = (savedShowId) => {
    this.setState((prevState) => ({
      savedShows: prevState.savedShows.filter((s) => s.id !== savedShowId),
    }));
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
          {/* In the route we are passing down our handleLogin to our login component */}
          <Route
            path="/login"
            render={(routerProps) => {
              return <Login {...routerProps} handleLogin={this.handleLogin} />;
            }}
          />
          {/*Planned logic to check if user is logged in. */}
          {/* <Route
            path="/"
            render={() => {
              const loggedIn = !!this.state.auth.currentUser.id;

              return loggedIn ? <About /> : <Redirect to="/login" />;
            }}
          /> */}
        </Switch>
        <Route exact={true} path="/" component={Home} />

        <ShowContainer
          savedShows={this.state.savedShows}
          handleRemovingSavedShow={this.handleRemovingSavedShow}
          handleSavingShow={this.handleSavingShow}
        />
        <SavedShowContainer
          savedShows={this.state.savedShows}
          handleAddReview={this.handleAddReview}
          handleDeleteReview={this.handleDeleteReview}
        />
      </div>
    );
  }
}
export default App;
