import React from "react";
import "./Product.css";

function Product() {
	return (
		<div className="product">
			<div className="product-info">
				<p>The lean startup</p>
				<p className="product-price">
					<small>£</small>
					<strong>19.99</strong>
				</p>
				<div className="product-rating">
					<p className="rating-star">&#9733;</p>
				</div>
			</div>
			<img
				src="data:image/png;base64,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"
				alt="The lean startup"
			/>
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
