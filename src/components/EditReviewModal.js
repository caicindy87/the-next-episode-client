import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import EditReviewForm from "./EditReviewForm";

class EditReviewModal extends Component {
  render() {
    const { savedShowId, handleClose, review } = this.props;

    return (
      <>
        <Modal
          show={this.props.editModalIsOpen}
          onHide={this.props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditReviewForm
              savedShowId={savedShowId}
              handleClose={handleClose}
              review={review}
            />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditReviewModal;
