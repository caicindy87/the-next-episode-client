import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="item">{`Welcome ${this.props.currentUser.username}`}</div>
    </div>
  );
};

export default Home;
