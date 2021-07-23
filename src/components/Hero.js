import React from "react";
import { Link } from "react-router-dom";

// Assets
import img from "assets/img/index1.jpg";
const Hero = () => {
  return (
    <div
      className="root"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container hero">
        <div className="hero-content">
          <h2>Perfume your day</h2>
          <h4 className="mg-b1">
            A perfume is like a piece of clothing, a message, a way of
            presenting oneself a costume that according to the person who wears
            it.
          </h4>
          <Link to="/product" className="btn">
            Shop now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
