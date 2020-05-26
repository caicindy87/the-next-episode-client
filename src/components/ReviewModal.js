import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import ReviewForm from "./ReviewForm";

class ReviewModal extends Component {
  render() {
    const { savedShowId } = this.props;

    return (
      <>
        <Modal show={this.props.isOpen} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReviewForm
              savedShowId={savedShowId}
              handleClose={this.props.handleClose}
              handleAddReview={this.props.handleAddReview}
            />
          </Modal.Body>
          <Modal.Footer>
            {/* <button class="ui green basic button">Save</button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ReviewModal;
