import React from "react";

const SavedShowDetails = ({ savedShow }) => {
  return (
    <div className="show content left floated five wide column ">
      <img
        src={savedShow.show.image_thumbnail_path}
        className="ui large rounded image"
      />
      <div className="show-details">
        <p className="date">Start date: {savedShow.show.start_date}</p>
        <p className="date">End date: {savedShow.show.end_date}</p>
        <p>Status: {savedShow.show.status}</p>
        <p>Country: {savedShow.show.country}</p>
        <p>Network: {savedShow.show.network}</p>
      </div>
    </div>
  );
};

export default SavedShowDetails;
