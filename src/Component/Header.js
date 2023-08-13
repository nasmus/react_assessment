import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Css/Header.css";
import { Store } from "../Store";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DehazeIcon from "@mui/icons-material/Dehaze";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  //sign out
  const signOutHandle=()=>{
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
  }
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
        {userInfo ? (
          <>
            <div className="two_icon">
              {userInfo.phone}
              <AccountCircleIcon className="big" />
            </div>
            <div>
              <Link to="/" onClick={signOutHandle} >Log Out</Link>
            </div>
          </>
        ) : (
          <div className="airban">
            <Link to="/login">Log In</Link>
          </div>
        )}

        <div className="icon">
          <Link to="/cart">
            <AddShoppingCartIcon />
            <span style={{ color: "black" }}>
              {cart.cartItems.length > 0 && (
                <span style={{ color: "black" }}>
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </span>
              )}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
