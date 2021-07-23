import React from "react";
// Assets
import logo from "assets/img/d-Perfumewhite.png";

const Footer = () => {
  return (
    <div className="full-width-brown">
      <div className="container footer">
        <ul>
          <li>
            <img src={logo} alt="logo" />
          </li>
          <li>
            <p>© 2020. All Rights Reserved.</p>
          </li>
        </ul>
        <ul className="footer-links">
          <li className="mg-r-36">
            <a href="/#">
              <h5>Product</h5>
            </a>
          </li>
          <li className="mg-r-36">
            <a href="/#">
              <h5>Blog</h5>
            </a>
          </li>
          <li>
            <a href="/#">
              <h5>Contact</h5>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
