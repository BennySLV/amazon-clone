import React from "react";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home-container">
				<img
					className="home-image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/N2IxYThmYzAt/N2IxYThmYzAt-MjVlNmIyZTUt-w1500._CB407941419_.jpg"
					alt="Home image"
				/>
			</div>
			<div className="home-product-row">
				<Product />
				<Product />
			</div>
			<div className="home-product-row">
				<Product />
				<Product />
				<Product />
			</div>
			<div className="home-product-row">
				<Product />
			</div>
		</div>
	);
}

export default Home;
