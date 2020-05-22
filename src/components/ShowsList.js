import React from "react";

import Show from "./Show";

const ShowsList = ({ shows }) => {
  return (
    <div class="ui vertically divided grid">
      <div class="two column row">
        {shows.map((show) => (
          <div class="column">
            <Show key={show.id} show={show} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowsList;
