import React from "react";

const SearchBar = ({ searchTerm, changeSearchTerm, fetchMovies }) => {
  return (
    <div>
      <input
        className="searchInput"
        type="text"
        placeholder="Search for show"
        value={searchTerm}
        onChange={(e) => changeSearchTerm(e.target.value)}
      />
      <input type="submit" value="Search" onClick={fetchMovies} />
    </div>
  );
};

export default SearchBar;
