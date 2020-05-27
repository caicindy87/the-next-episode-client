import React from "react";

import "../style/show.css";
import SavedShowsList from "./SavedShowsList";

class Show extends React.Component {
  createSavedShow = () => {
    fetch("http://localhost:3000/api/v1/saved_shows", {
      method: "POST",
      body: JSON.stringify({
        show: this.props.show,
        saved_show: { rating: 0, user_id: 1 },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((s) => this.props.handleSavingShow(s));
  };

  removeSavedShow = (id) => {
    fetch(`http://localhost:3000/api/v1/saved_shows/${id}`, {
      method: "DELETE",
    });

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
    const savedShow = savedShows.find(
      (savedShow) => savedShow.show.name === show.name
    );

    return (
      <div className="ui grid ">
        <div className="row">
          <div className="thumbnail six wide column ">
            <img
              src={show.image_thumbnail_path}
              className="ui medium rounded image"
            />
          </div>
          <div className=" show-details six wide column">
            <h1>{show.name}</h1>
            <div className="-details">
              <p className="date">Start date: {show.start_date}</p>
              <p className="date">End date: {show.end_date}</p>
              <p>Status: {show.status}</p>
              <p>Country: {show.country}</p>
              <p>Network: {show.network}</p>
            </div>
            <br />
            <button
              className={
                savedShow
                  ? "ui green basic button fluid"
                  : "ui green  button fluid"
              }
              onClick={this.saveOrRemoveShow}
            >
              {savedShows.some((savedShow) => savedShow.show.name === show.name)
                ? "Unsave Show"
                : "Save Show"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// const Show = ({ show }) => {
//   return (
//     <div className="ui grid ">
//       <div className="row">
//         <div className="thumbnail five wide column ">
//           <img
//             src={show.image_thumbnail_path}
//             className="ui large rounded image"
//           />
//         </div>
//         <div className=" show-details six wide column ">
//           <h1>{show.name}</h1>
//           <div className="-details">
//             <p className="date">Start date: {show.start_date}</p>
//             <p className="date">End date: {show.end_date}</p>
//             <p>Status: {show.status}</p>
//             <p>Country: {show.country}</p>
//             <p>Network: {show.network}</p>
//           </div>
//           <button class="ui green basic button" onClick={() => <ReviewForm />}>
//             Rate and Review
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Show;
