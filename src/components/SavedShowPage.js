import React from "react";
import { Rating } from "semantic-ui-react";

import "../style/savedshowpage.css";
import ReviewModal from "./ReviewModal";

class SavedShowPage extends React.Component {
  constructor(props) {
    super();
    this.state = { isOpen: false, rating: props.savedShow.rating };
  }

  showModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleRate = (e, { rating }) => {
    this.setState({
      rating: rating,
    });
  };

  componentDidUpdate() {
    fetch(
      `http://localhost:3000/api/v1/saved_shows/${this.props.savedShow.id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          rating: this.state.rating,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  render() {
    const { savedShow, handleDeleteReview, handleAddReview } = this.props;
    const { isOpen, rating } = this.state;
    const sortedReviews = savedShow.reviews.sort((a, b) => {
      if (b.created_at < a.created_at) {
        return -1;
      }
      if (b.created_at > a.created_at) {
        return 1;
      }
    });

    return (
      <div className="ui grid container">
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
            <Rating
              icon="star"
              maxRating={5}
              clearable
              onRate={this.handleRate}
              rating={rating}
              size="massive"
            />

            <h3>Reviews</h3>
            <button className="ui green button" onClick={this.showModal}>
              Add a Review
            </button>
            <ReviewModal
              isOpen={isOpen}
              handleClose={this.hideModal}
              savedShowId={savedShow.id}
              handleAddReview={handleAddReview}
            />
            {sortedReviews.map((r) => (
              <div key={r.id} className="review-box">
                <p>Submitted Date: {r.created_at.substring(0, 10)}</p>
                <button
                  className="ui icon red button right floated"
                  onClick={() => handleDeleteReview(savedShow.id, r.id)}
                >
                  <i aria-hidden="true" className="delete icon"></i>
                </button>
                <p>{r.spoiler ? "Contains Spoiler" : "No Spoiler"}</p>
                <p>{r.content}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SavedShowPage;
