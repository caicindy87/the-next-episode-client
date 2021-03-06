import React from "react";

import "../style/showpage.css";

class Show extends React.Component {
  createSavedShow = () => {
    const token = localStorage.getItem("token");
    const { currentUser } = this.props;

    fetch(
      `https://the-next-episode-api.herokuapp.com/api/v1/users/${currentUser.id}/saved_shows`,
      {
        method: "POST",
        body: JSON.stringify({
          show: this.props.show,
          saved_show: { rating: 0, user_id: currentUser.id },
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
      }
    )
      .then((resp) => resp.json())
      .then((s) => this.props.handleSavingShow(s));
  };

  removeSavedShow = (id) => {
    const token = localStorage.getItem("token");
    const { currentUser } = this.props;

    fetch(
      `https://the-next-episode-api.herokuapp.com/api/v1/users/${currentUser.id}/saved_shows/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );

    this.props.handleRemovingSavedShow(id);
  };

  saveOrRemoveShow = () => {
    const { show, savedShows } = this.props;
    const savedShow = savedShows.find(
      (savedShow) => savedShow.show.name === show.name
    );

    savedShow ? this.removeSavedShow(savedShow.id) : this.createSavedShow();
  };

  render() {
    const { show, savedShows } = this.props;
    const loggedIn = !!localStorage.getItem("token");
    let savedShow = "";

    /* Used to change style of button on show's show page. If logged in and the show is already saved by user, button will not be filled and will say Unsave Show. If show is not yet saved by user, button will be filled and say Save Show*/
    loggedIn &&
      (savedShow = savedShows.find(
        (savedShow) => savedShow.show.name === show.name
      ));

    return (
      <div className="ui grid container">
        <div className="row">
          <div className="thumbnail six wide column ">
            <img
              src={show.image_thumbnail_path}
              className="ui large rounded image"
            />
          </div>

          <div className=" show-details-container six wide column">
            <h1>{show.name}</h1>
            <div className="show-details">
              <p className="date">Start date: {show.start_date}</p>
              <p className="date">End date: {show.end_date}</p>
              <p>Status: {show.status}</p>
              <p>Country: {show.country}</p>
              <p>Network: {show.network}</p>
            </div>
            <br />
            {loggedIn ? (
              <button
                className={
                  savedShow
                    ? "ui green basic button fluid"
                    : "ui green button fluid"
                }
                onClick={this.saveOrRemoveShow}
              >
                {/* To check if show is saved or not*/}
                {savedShows.some(
                  (savedShow) => savedShow.show.name === show.name
                )
                  ? "Unsave Show"
                  : "Save Show"}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
