import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import ReviewForm from "./ReviewForm";

class ReviewModal extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.isOpen} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReviewForm />
          </Modal.Body>
          <Modal.Footer>
            Footer
            <button>Save</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ReviewModal;
