import React from "react";

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
      <input type="submit" value="Search" onClick={fetchShows} />
    </div>
  );
};

export default SearchBar;
