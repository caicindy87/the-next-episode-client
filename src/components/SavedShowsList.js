import React from "react";
import { Link } from "react-router-dom";

import "../style/savedshowlist.css";

const SavedShowsList = ({ savedShows }) => {
  return (
    <div className="ui vertically divided grid">
      <div className="four column row">
        {savedShows.map((savedShow) => (
          <div key={savedShow.id} className="column">
            <Link to={`/savedshows/${savedShow.id}`} className="ui card">
              <div className="image">
                <img src={savedShow.show.image_thumbnail_path} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedShowsList;
