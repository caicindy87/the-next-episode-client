import React, { Component } from "react";
import { Form, Rating } from "semantic-ui-react";

class ReviewForm extends Component {
  state = {
    content: "",
    rating: null,
    spoiler: false,
  };

  handleRate = (e, { rating, maxRating }) => {
    this.setState({
      rating: rating,
    });
  };

  toggleSpoiler = () => {
    this.setState((prevState) => ({ spoiler: !prevState.spoiler }));
  };

  handleChangeContent = (e) => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = () => {
    fetch("http://localhost:3000/api/v1/reviews", {});
  };

  // handleChangeDate = () => {

  // }

  render() {
    const { content, spoiler } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Rating maxRating={5} clearable onRate={this.handleRate} />
        <Form.Checkbox
          label="Contains spoiler"
          checked={spoiler}
          onChange={this.toggleSpoiler}
        />
        <Form.TextArea
          label="Review"
          placeholder="What did you think about the show?"
          value={content}
          onChange={this.handleChangeContent}
        />
        <Form.Input
          label="Watch Date"
          type="date"
          placeholder="Enter watch date"
          // onChange={this.handleChangeDate}
        />
      </Form>
    );
  }
}

export default ReviewForm;
