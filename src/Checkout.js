import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout-left-hand-column">
				<img
					className="checkout-ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB4234929668_.jpg"
					alt=""
				/>
				<div>
					<h2 className="checkout-title">Your shopping basket</h2>
				</div>
			</div>
			<div className="checkout-right-hand-column">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
