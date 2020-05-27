import React from "react";
import { Button } from "semantic-ui-react";

const Review = ({ showEditModal, handleDeleteReview, r, savedShow }) => {
  return (
    <div key={r.id} className="review-box">
      <Button.Group size="mini" floated="right">
        <Button
          color="blue"
          icon="edit"
          onClick={() => showEditModal(r)}
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
  );
};

export default Review;
