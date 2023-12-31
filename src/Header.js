import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useSelector } from "react-redux";

function Header() {
  const cartData = useSelector((state) => state.cart_Data);
  // console.log(cartData);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello Qazi</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            {/** soping basket icon */}
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {cartData.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
