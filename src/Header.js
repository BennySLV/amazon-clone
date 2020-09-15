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
			<div className="header-search">
				<input className="header__searchInput" type="text" />
			</div>
			<div className="header-nav">
				{/* Hello, sign-in */}
				<div className="header-option">
					<span className="header-optionLineOne">Hello, Guest</span>
					<span className="header-optionLineTwo">Sign in</span>
				</div>
				{/* Returns and orders */}
				<div className="header-option">
					<span className="header-optionLineOne">Returns</span>
					<span className="header-optionLineTwo">:amp Orders</span>
				</div>
				{/* Your prime */}
				<div className="header-option">
					<span className="header-optionLineOne">Your</span>
					<span className="header-optionLineTwo">Prime</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
