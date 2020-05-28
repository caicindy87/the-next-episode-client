import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SavedShowsList from "../components/SavedShowsList";
import SavedShowPage from "../components/SavedShowPage";
import Loader from "../components/Loader";

class SavedShowContainer extends Component {
  render() {
    const {
      savedShows,
      handleAddReview,
      handleDeleteReview,
      handleEditReview,
    } = this.props;

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
                  handleAddReview={handleAddReview}
                  handleDeleteReview={handleDeleteReview}
                  handleEditReview={handleEditReview}
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
