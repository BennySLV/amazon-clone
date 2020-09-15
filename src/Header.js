/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
	return (
		<div className="header">
			<img
				className="header-logo"
				src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
			/>
			<div className="header-search">
				<input className="header-searchInput" type="text" />
				<SearchIcon className="header-search-icon" />
			</div>
			<div className="header-nav">
				{/* "Hello, sign-in" option*/}
				<div className="header-option">
					<span className="header-option-line-one">Hello Guest</span>
					<span className="header-option-line-two">Sign in</span>
				</div>
				{/* "Returns and orders" option*/}
				<div className="header-option">
					<span className="header-option-line-one">Returns</span>
					<span className="header-option-line-two">&amp; Orders</span>
				</div>
				{/* "Your prime" option*/}
				<div className="header-option">
					<span className="header-option-line-one">Your</span>
					<span className="header-option-line-two">Prime</span>
				</div>
				<div className="header-option-basket">
					<ShoppingBasketIcon />
					<span className="header-option-line-two header-basket-count">
						0
					</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
