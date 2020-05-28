import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import ShowsList from "../components/ShowsList";
import Show from "../components/Show";
import Loader from "../components/Loader";

class ShowContainer extends Component {
  render() {
    const {
      savedShows,
      handleRemovingSavedShow,
      handleSavingShow,
      currentUser,
      shows,
    } = this.props;

    return (
      <div>
        <Switch>
          <Route
            path="/shows/:id"
            render={(routerProps) => {
              const showId = +routerProps.match.params.id;
              const show = shows.find((s) => s.id === showId);

              return show ? (
                <Show
                  show={show}
                  savedShows={savedShows}
                  handleRemovingSavedShow={handleRemovingSavedShow}
                  handleSavingShow={handleSavingShow}
                  currentUser={currentUser}
                />
              ) : (
                <Loader />
              );
            }}
          ></Route>
          <Route
            path="/shows"
            render={() => <ShowsList shows={shows} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default ShowContainer;
