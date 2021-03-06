import React from "react";
import "../styles/Checkout.css";
import { useStateValue } from "../StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
	const [{ basket, user }] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout-left-hand-column">
				<img
					className="checkout-ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB4234929668_.jpg"
					alt=""
				/>
				<div>
					<h3>{user?.email}</h3>
					<h2 className="checkout-title">Your shopping basket</h2>
					{basket.map((item) => (
						<CheckoutProduct
							key={item.id}
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
			<div className="checkout-right-hand-column">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
