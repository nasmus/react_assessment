import React from "react";
import { Link } from "react-router-dom";
import "../Css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DehazeIcon from "@mui/icons-material/Dehaze";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img
            className="header__icon"
            src="https://www.repliq.dev/logos/repliq2x-logo.png"
            alt=""
          />
        </Link>
      </div>

      <div className="header__center">
        <input placeholder="Start your search" type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <div className="airban">
          <Link to='/login' >Log In</Link>
        </div>
        <div className="icon">
          <AddShoppingCartIcon />
        </div>
        <div className="two_icon">
          <DehazeIcon />
          <AccountCircleIcon className="big" />
        </div>
      </div>
    </div>
  );
}

export default Header;
