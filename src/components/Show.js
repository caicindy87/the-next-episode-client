import React from "react";
import { Card, Image } from "semantic-ui-react";

const Show = ({ show }) => {
  return (
    <div class="ui card">
      <div class="image">
        <img src={show.image_thumbnail_path} />
      </div>
      <div class="content">
        <div class="header">{show.name}</div>
        <br />
        <div class="meta">
          <span class="date">Start date: {show.start_date}</span>
          <br />
          <span class="date">End date: {show.end_date}</span>
        </div>
        <br />
        <div class="content">
          <p>Country: {show.country}</p>
          <p>Network: {show.network}</p>
          <p>Status: {show.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Show;
