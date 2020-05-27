import React from "react";

import "../style/show.css";

class Show extends React.Component {
  // saved_show needs show_id, user_id. when a show is saved, can just default rating to null. should remove watch_date?
  state = {
    saved: false,
    savedShowId: null,
  };

  toggleSaveButton = () => {
    this.setState((prevState) => ({ saved: !prevState.saved }));
  };

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
      .then((s) => console.log(s));
  };

  removeSavedShow = () => {
    fetch(
      `http://localhost:3000/api/v1/saved_shows/${this.state.savedShowId}`,
      { method: "DELETE" }
    );
  };

  componentDidUpdate() {
    this.createSavedShow();
  }

  render() {
    const { show } = this.props;
    const { saved } = this.state;

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
                saved ? "ui green basic button fluid" : "ui green  button fluid"
              }
              onClick={this.toggleSaveButton}
            >
              {saved ? "Unsave Show" : "Save Show"}
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
