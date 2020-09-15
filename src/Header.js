/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<img
				className="header-logo"
				src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
			/>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
			</div>
			<div className="header__nav">
				{/* Hello, sign-in */}
				<div className="header__option">
					<span className="header__optionLineOne">Hello, Guest</span>
					<span className="header__optionLineTwo">Sign in</span>
				</div>
				{/* Returns and orders */}
				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">:amp Orders</span>
				</div>
				{/* Your prime */}
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
