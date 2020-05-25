import React from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ searchTerm, changeSearchTerm, fetchShows }) => {
  return (
    <div>
      <input
        className="searchInput"
        type="text"
        placeholder="Search for show"
        value={searchTerm}
        onChange={(e) => changeSearchTerm(e.target.value)}
      />
      <Link to="/shows">
        <input type="submit" value="Search" onClick={fetchShows} />
      </Link>
    </div>
  );
};

export default SearchBar;
