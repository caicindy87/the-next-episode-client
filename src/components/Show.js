import React from "react";

import "../style/show.css";

const Show = ({ show }) => {
  return (
    <div className="ui grid ">
      <div className="row">
        <div className="thumbnail five wide column ">
          <img
            src={show.image_thumbnail_path}
            className="ui large rounded image"
          />
        </div>
        <div className=" show-details six wide column ">
          <h1>{show.name}</h1>
          <div className="-details">
            <p className="date">Start date: {show.started_date}</p>
            <p className="date">End date: {show.ended_date}</p>
            <p>Status: {show.status}</p>
            <p>Country: {show.country}</p>
            <p>Network: {show.network}</p>
          </div>
          <button class="ui green basic button">Rate and Review</button>
        </div>
      </div>
    </div>
  );
};

export default Show;
