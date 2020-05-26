import React from "react";

import "../style/show.css";
import ReviewForm from "./ReviewForm";
import ReviewModal from "./ReviewModal";

class Show extends React.Component {
  state = {
    isOpen: false,
  };

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

  // saved_show needs show_id, user_id. when a show is saved, can just default rating to null. should remove watch_date?

  render() {
    const { show } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="ui grid ">
        <div className="row">
          <div className="thumbnail five wide column ">
            <img
              src={show.image_thumbnail_path}
              className="ui large rounded image"
            />
          </div>
          <div className=" show-details six wide column ">
            <h1>{show.name}</h1>
            <div className="-details">
              <p className="date">Start date: {show.start_date}</p>
              <p className="date">End date: {show.end_date}</p>
              <p>Status: {show.status}</p>
              <p>Country: {show.country}</p>
              <p>Network: {show.network}</p>
            </div>
            <button class="ui green basic button" onClick={this.showModal}>
              Rate and Review
            </button>
            <ReviewModal isOpen={isOpen} handleClose={this.hideModal} />
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
