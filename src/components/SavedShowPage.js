import React from "react";

import "../style/savedshowpage.css";

const SavedShowPage = ({ savedShow }) => {
  return (
    <div className="ui grid">
      <div className="show content left floated six wide column ">
        <img src={savedShow.show.image} className="ui medium rounded image" />
        <div class="show-details">
          <p className="date">Start date: {savedShow.show.started_date}</p>
          <p className="date">End date: {savedShow.show.ended_date}</p>
          <p>Country: {savedShow.show.country}</p>
          <p>Network: {savedShow.show.network}</p>
        </div>
      </div>
      <div className="content right floated nine wide column">
        <h1>{savedShow.show.name}</h1>
        <br />
        <div className="ui horizontal divider">
          <h4 className="ui header">
            <i aria-hidden="true" className="write square icon"></i>
            My Review Log
          </h4>
        </div>{" "}
        <div class="review-log">
          <p>Watch Date: {savedShow.watch_date}</p>
          <p>My Rating: {savedShow.rating}</p>
          <h3>Reviews</h3>
          {savedShow.reviews.map((r) => (
            <div key={r.id} className="ui checkbox">
              <label htmlFor="spoiler">Contains Spoiler </label>
              <input
                id="spoiler"
                type="checkbox"
                checked={r.spoiler}
                readOnly
              />
              <br />
              <p class="review">{r.content}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedShowPage;
