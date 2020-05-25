import React from "react";
import { Link } from "react-router-dom";

import "../style/savedshowlist.css";

const ShowsList = ({ shows }) => {
  return (
    <div className="ui vertically divided grid">
      <div className="four column row">
        {shows.map((show) => (
          <div key={show.id} className="column">
            <Link to={`/shows/${show.id}`} className="ui card">
              <div className="image">
                <img src={show.image_thumbnail_path} />
              </div>
              <p className="show-name">{show.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowsList;
