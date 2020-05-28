import React from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ searchTerm, changeSearchTerm, fetchShows }) => {
  return (
    <div className="searchbar">
      <input
        className="searchInput"
        type="text"
        placeholder="Search for show"
        value={searchTerm}
        onChange={(e) => changeSearchTerm(e.target.value)}
      />
      <Link to="/shows">
        <button
          type="button"
          onClick={fetchShows}
          className="ui mini green button"
        >
          <i aria-hidden="true" class="search icon"></i>
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
