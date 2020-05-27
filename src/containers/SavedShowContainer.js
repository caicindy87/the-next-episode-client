import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SavedShowsList from "../components/SavedShowsList";
import SavedShowPage from "../components/SavedShowPage";
import Loader from "../components/Loader";

class SavedShowContainer extends Component {
  state = {
    savedShows: [],
  };

  fetchShows = () => {
    fetch("http://localhost:3000/api/v1/saved_shows")
      .then((resp) => resp.json())
      .then((data) => this.setState({ savedShows: data }));
  };

  componentDidMount() {
    this.fetchShows();
  }

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

  render() {
    const { savedShows } = this.state;

    return (
      <div>
        <Switch>
          <Route
            path="/savedshows/:id"
            render={(routerProps) => {
              const savedShowId = +routerProps.match.params.id;
              const savedShow = savedShows.find((s) => s.id === savedShowId);

              return savedShow ? (
                <SavedShowPage
                  savedShow={savedShow}
                  handleAddReview={this.handleAddReview}
                  handleDeleteReview={this.handleDeleteReview}
                />
              ) : (
                <Loader />
              );
            }}
          ></Route>
          <Route
            path="/savedshows"
            render={() => <SavedShowsList savedShows={savedShows} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default SavedShowContainer;
