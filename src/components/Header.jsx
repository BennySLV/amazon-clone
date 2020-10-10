import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
	const [{ basket, user }] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header-logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				/>
			</Link>
			<div className="header-search">
				<input className="header-searchInput" type="text" />
				<SearchIcon className="header-search-icon" />
			</div>
			<div className="header-nav">
				<Link to={!user && "/login"}>
					<div
						onClick={handleAuthentication}
						className="header-option"
					>
						<span className="header-option-line-one">
							{user ? `Hello ${user.email}` : "Not signed in"}
						</span>
						<span className="header-option-line-two">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
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
				<Link to="/checkout">
					<div className="header-option-basket">
						<ShoppingBasketIcon />
						<span className="header-option-line-two header-basket-count">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
