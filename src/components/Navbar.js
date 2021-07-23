import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="full-width-brown">
      <div className="container">
        <ul className="menu">
          <li>
            <Link to="/product/chanel">
              <h5>CHANEL</h5>
            </Link>
          </li>
          <li>
            <Link to="/product/chanel">
              <h5>Jo Malone</h5>
            </Link>
          </li>
          <li>
            <Link to="/product/chanel">
              <h5>Curology</h5>
            </Link>
          </li>
          <li>
            <Link to="/product/chanel">
              <h5>Dior</h5>
            </Link>
          </li>
          <li>
            <Link to="/product/chanel">
              <h5>Chloe</h5>
            </Link>
          </li>
          <li>
            <Link to="/product/chanel">
              <h5>ZARA</h5>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
