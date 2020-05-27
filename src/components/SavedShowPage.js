import React from "react";
import { Rating, Button } from "semantic-ui-react";

import "../style/savedshowpage.css";
import ReviewModal from "./ReviewModal";
import EditReviewModal from "./EditReviewModal";
import Review from "./Review";
import SavedShowDetails from "./SavedShowDetails";

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
    const { isOpen, rating, editModalIsOpen, review } = this.state;

    const {
      savedShow,
      handleDeleteReview,
      handleAddReview,
      handleEditReview,
    } = this.props;

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
        <SavedShowDetails savedShow={savedShow} />
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
              <Review
                showEditModal={this.showEditModal}
                handleDeleteReview={handleDeleteReview}
                r={r}
                savedShow={savedShow}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SavedShowPage;
