import React from "react";

import Show from "./Show";

const ShowsList = ({ shows, savedShows }) => {
  return (
    <div className="ui vertically divided grid">
      <div className="four column row">
        {shows.map((show) => (
          <div key={show.id} className="column">
            <Show show={show} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowsList;
