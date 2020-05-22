import React from "react";
import { Link } from "react-router-dom";

const SavedShowsList = ({ savedShows }) => {
  return (
    <div className="ui vertically divided grid">
      <div className="four column row">
        {savedShows.map((savedShow) => (
          <div key={savedShow.id} className="column">
            <Link to={`/savedshows/${savedShow.id}`} className="ui card">
              <div className="image">
                <img src={savedShow.show.image} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedShowsList;
