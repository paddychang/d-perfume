import React from "react";
// Assets
import img from "assets/img/index10.jpg";

const Subscribe = () => {
  return (
    <div className="subscribe" style={{ backgroundImage: `url(${img})` }}>
      <div className="container">
        <h3 className="pd-t-312">記得</h3>
        <h3 className="mg-b-20">訂閱以獲取更多資訊！</h3>
        <input type="text" placeholder="Your email address" />
        <a href="/#">Subscribe</a>
      </div>
    </div>
  );
};

export default Subscribe;
