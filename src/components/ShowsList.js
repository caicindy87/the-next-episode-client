import React from "react";
import { Link } from "react-router-dom";

import "../style/list.css";

const ShowsList = ({ shows }) => {
  return (
    <>
      <h1>Popular Shows</h1>
      <div className="ui  grid">
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
    </>
  );
};

export default ShowsList;
