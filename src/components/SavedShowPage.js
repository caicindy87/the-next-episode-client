import React from "react";
import { Rating, Button } from "semantic-ui-react";

import "../style/savedshowpage.css";
import ReviewModal from "./ReviewModal";
import EditReviewModal from "./EditReviewModal";

class SavedShowPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
      rating: props.savedShow.rating,
      editModalIsOpen: false,
      review: {},
    };
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

  showEditModal = (review) => {
    this.setState({
      editModalIsOpen: true,
      review: review,
    });
  };

  hideEditModal = () => {
    this.setState({
      editModalIsOpen: false,
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
    const {
      savedShow,
      handleDeleteReview,
      handleAddReview,
      handleEditReview,
    } = this.props;
    const { isOpen, rating, editModalIsOpen, review } = this.state;

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
            <Button
              color="green"
              onClick={this.showModal}
              content="Add a Review"
            ></Button>
            <ReviewModal
              isOpen={isOpen}
              handleClose={this.hideModal}
              savedShowId={savedShow.id}
              handleAddReview={handleAddReview}
            />
            <EditReviewModal
              editModalIsOpen={editModalIsOpen}
              handleClose={this.hideEditModal}
              savedShowId={savedShow.id}
              review={review}
              handleEditReview={handleEditReview}
            />
            {sortedReviews.map((r) => (
              <div key={r.id} className="review-box">
                <Button.Group size="mini" floated="right">
                  <Button
                    color="blue"
                    icon="edit"
                    onClick={() => this.showEditModal(r)}
                  ></Button>
                  <Button
                    color="red"
                    icon="trash alternate"
                    onClick={() => handleDeleteReview(savedShow.id, r.id)}
                  ></Button>
                </Button.Group>
                <p>Reviewed on {r.created_at.substring(0, 10)}</p>
                <p>{r.spoiler ? "Contains Spoiler" : "No Spoiler"}</p>
                <p className="review-content">{r.content}</p>
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
