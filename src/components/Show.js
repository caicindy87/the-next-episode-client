import React from "react";

const Show = ({ show, popularShow }) => {
  return (
    <div className="ui grid container">
      <div className=" content left floated five wide column ">
        <img
          src={show.image_thumbnail_path}
          className="ui large rounded image"
        />
      </div>
      <div className=" content left floated five wide column ">
        <h1>{show.name}</h1>

        <div className="-details">
          <p className="date">Start date: {show.started_date}</p>
          <p className="date">End date: {show.ended_date}</p>
          <p>Status: {show.status}</p>
          <p>Country: {show.country}</p>
          <p>Network: {show.network}</p>
        </div>
      </div>
    </div>
  );
};

export default Show;
