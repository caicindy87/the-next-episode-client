import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import NavBar from "../components/Navbar";
import Home from "../components/Home";
import Login from "../components/Login";
import ShowContainer from "./ShowContainer";
import api from "../services/api";
import SavedShowContainer from "./SavedShowContainer";
import Signup from "../components/Signup";
import "../style/app.css";

class App extends React.Component {
  state = {
    auth: { currentUser: {} },
    savedShows: [],
    shows: [],
    searchTerm: "",
  };

  changeSearchTerm = (searchValue) => {
    this.setState({ searchTerm: searchValue });
  };

  // fetch shows from EpisoDate API based on query
  fetchShows = () => {
    fetch(
      `http://localhost:3000/api/v1/search?searchTerm=${this.state.searchTerm}`,
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({ shows: data.tv_shows });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    const token = localStorage.getItem("token");

    // Re-authorize user when page reloads
    if (token) {
      api.auth.getCurrentUser(token).then((user) => {
        const currentUser = { currentUser: user };

        this.setState({ auth: currentUser }, () => this.fetchSavedShows(user));
      });
    }

    // Fetches shows from Rails API to populate shows page
    fetch("http://localhost:3000/api/v1/shows", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ shows: data });
      })
      .catch((err) => console.log(err));
  }

  // Fetch user's saved shows
  fetchSavedShows = (user) => {
    console.log("getting current user!", user);
    const token = localStorage.getItem("token");

    api.show.fetchSavedShows(token, user).then((data) => {
      const savedShows = data.filter((s) => s.user.id === user.id);
      this.setState({ savedShows: savedShows });
    });
  };

  handleAddReview = (savedShowId, review) => {
    this.setState((prevState) => ({
      savedShows: prevState.savedShows.map((s) =>
        s.id === savedShowId ? { ...s, reviews: [...s.reviews, review] } : s
      ),
    }));
  };

  handleEditReview = (savedShowId, updatedReview) => {
    this.setState((prevState) => ({
      savedShows: prevState.savedShows.map((s) => {
        if (s.id === savedShowId) {
          return {
            ...s,
            reviews: s.reviews.map((r) =>
              r.id === updatedReview.id ? updatedReview : r
            ),
          };
        } else {
          return s;
        }
      }),
    }));
  };

  handleDeleteReview = (savedShowId, reviewId) => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:3000/api/v1/reviews/${reviewId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
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

  handleSignup = (user) => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.token);

    this.setState({ auth: currentUser });
  };

  handleLogin = (user) => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.token);

    this.setState({ auth: currentUser }, () => this.fetchSavedShows(user));
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} }, savedShows: [] });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div className="App">
        <NavBar
          currentUser={this.state.auth.currentUser}
          handleLogout={this.handleLogout}
          searchTerm={searchTerm}
          changeSearchTerm={this.changeSearchTerm}
          fetchShows={this.fetchShows}
        />

        <Switch>
          <Route
            path="/login"
            render={(routerProps) => {
              return <Login {...routerProps} handleLogin={this.handleLogin} />;
            }}
          />
          <Route
            path="/signup"
            render={(routerProps) => {
              return (
                <Signup {...routerProps} handleSignup={this.handleSignup} />
              );
            }}
          ></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>

        <ShowContainer
          shows={this.state.shows}
          currentUser={this.state.auth.currentUser}
          savedShows={this.state.savedShows}
          handleRemovingSavedShow={this.handleRemovingSavedShow}
          handleSavingShow={this.handleSavingShow}
        />
        <SavedShowContainer
          savedShows={this.state.savedShows}
          handleAddReview={this.handleAddReview}
          handleDeleteReview={this.handleDeleteReview}
          handleEditReview={this.handleEditReview}
        />
      </div>
    );
  }
}
export default App;
