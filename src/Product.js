import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
	return (
		<div className="product">
			<div className="product-info">
				<p>{title}</p>
				<p className="product-price">
					<small>£</small>
					<strong>{price}</strong>
				</p>
				<div className="product-rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<span className="rating-star">🌟</span>
						))}
				</div>
			</div>
			<img src={image} />
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
