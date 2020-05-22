import React, { Component } from "react";
import SearchBar from "../components/SearchBar";

class ShowContainer extends Component {
  state = {
    shows: [],
    searchTerm: "",
  };

  changeSearchTerm = (searchValue) => {
    this.setState({ searchTerm: searchValue });
  };

  fetchMovies = () => {
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
      .then((data) => this.setState({ shows: data.tv_shows }));
  };

  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
          fetchMovies={this.fetchMovies}
        />
      </div>
    );
  }
}

export default ShowContainer;
