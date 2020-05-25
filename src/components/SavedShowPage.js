import React from "react";

import "../style/savedshowpage.css";

const SavedShowPage = ({ savedShow }) => {
  return (
    <div className="ui grid container">
      <div className="show content left floated five wide column ">
        <img
          src={savedShow.show.image_thumbnail_path}
          className="ui large rounded image"
        />
        <div className="show-details">
          <p className="date">Start date: {savedShow.show.started_date}</p>
          <p className="date">End date: {savedShow.show.ended_date}</p>
          <p>Status: {savedShow.show.status}</p>
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
        <div className="review-log">
          <p>Watch Date: {savedShow.watch_date}</p>
          <p>My Rating: {savedShow.rating}</p>
          <h3>Reviews</h3>
          {savedShow.reviews.map((r) => (
            <div key={r.id} className="review-box">
              <p>{r.spoiler ? "Contains Spoiler" : "No Spoiler"}</p>
              <p>{r.content}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedShowPage;
