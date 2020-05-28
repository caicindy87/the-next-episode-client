import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class EditReviewForm extends Component {
  state = {
    content: this.props.review.content,
    spoiler: this.props.review.spoiler,
  };

  toggleSpoiler = () => {
    this.setState((prevState) => ({ spoiler: !prevState.spoiler }));
  };

  handleChangeContent = (e) => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = () => {
    const { content, spoiler } = this.state;
    const { savedShowId, handleClose, review, handleEditReview } = this.props;

    fetch(`http://localhost:3000/api/v1/reviews/${review.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        content: content,
        spoiler: spoiler,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((review) => handleEditReview(savedShowId, review));

    handleClose();
  };

  render() {
    const { content, spoiler } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Checkbox
          label="Contains spoiler"
          checked={spoiler}
          onChange={this.toggleSpoiler}
        />
        <Form.TextArea
          label="Review"
          placeholder="What did you think of the show?"
          value={content}
          onChange={this.handleChangeContent}
        />
        <Form.Button content="Save" />
      </Form>
    );
  }
}

export default EditReviewForm;
