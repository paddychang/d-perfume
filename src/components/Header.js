import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
// MUIcons
import StoreIcon from "@material-ui/icons/Store";
import PersonIcon from "@material-ui/icons/Person";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
// Assets
import logo from "assets/img/d-Perfume.png";

// Util
import ClickOutside from "../util/ClickOutside";

const Header = forwardRef(({ open, setOpen }, ref) => {
  const handleClick = (e) => {
    setOpen(!open);
  };

  return (
    <div className="container header">
      <h1 className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </h1>
      <ul className="menu">
        <li className="sm-none mg-r2">
          <Link to="/product">
            <StoreIcon className="icons" />
            Product
          </Link>
        </li>
        <li className="sm-none mg-r2">
          <Link to="/login">
            <PersonIcon className="icons" />
            Log in
          </Link>
        </li>
        <li className="sm-none mg-r2">
          <Link to="/#">
            <FavoriteIcon className="icons" />
            Wishlist
          </Link>
        </li>
        <li>
          <Link to="/#">
            <ShoppingCartIcon className="icons" />
            <span>Cart(3)</span>
            <em>3</em>
          </Link>
        </li>
        <li className="dropdown">
          <button onClick={handleClick} className="dropbtn">
            <MenuIcon />
          </button>
          <div
            id="dropdown"
            className="dropdown-content"
            style={open ? { display: "block" } : { display: "none" }}
            ref={ref}
          >
            <a href="/product">Product</a>
            <a href="/#">Wishlist</a>
            <a href="/#">Blog</a>
            <a href="/#">Contact</a>
            <a href="/#">Mypage</a>
          </div>
        </li>
      </ul>
    </div>
  );
});

export default ClickOutside(Header);
