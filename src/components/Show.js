import React from "react";

const Show = ({ show }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={show.image_thumbnail_path} />
      </div>
      <div className="content">
        <div className="header">{show.name}</div>
        <br />
        <div className="meta">
          <span className="date">Start date: {show.start_date}</span>
          <br />
          <span className="date">End date: {show.end_date}</span>
        </div>
        <br />
        <div className="content">
          <p>Country: {show.country}</p>
          <p>Network: {show.network}</p>
          <p>Status: {show.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Show;
