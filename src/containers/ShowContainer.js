import React, { Component } from "react";

import SearchBar from "../components/SearchBar";
import ShowsList from "../components/ShowsList";

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

  render() {
    const { searchTerm, shows } = this.state;
    return (
      <div>
        <SearchBar
          searchTerm={searchTerm}
          changeSearchTerm={this.changeSearchTerm}
          fetchShows={this.fetchShows}
        />
        <ShowsList shows={shows} />
      </div>
    );
  }
}

export default ShowContainer;
