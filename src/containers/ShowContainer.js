import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import ShowsList from "../components/ShowsList";
import Show from "../components/Show";

class ShowContainer extends Component {
  state = {
    shows: [],
    searchTerm: "",
  };

  changeSearchTerm = (searchValue) => {
    this.setState({ searchTerm: searchValue });
  };

  fetchShows = () => {
    fetch("http://localhost:3000/api/v1/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        searchTerm: this.state.searchTerm,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ shows: data.tv_shows });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/shows")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ shows: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { searchTerm, shows, popularShows } = this.state;
    return (
      <div>
        <SearchBar
          searchTerm={searchTerm}
          changeSearchTerm={this.changeSearchTerm}
          fetchShows={this.fetchShows}
        />

        <Switch>
          <Route
            path="/shows/:id"
            render={(routerProps) => {
              const showId = +routerProps.match.params.id;
              const show = shows.find((s) => s.id === showId);

              return show ? <Show show={show} /> : "Loading...";
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
