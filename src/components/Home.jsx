import React from "react";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home__productRow">
					<Product
						id="1"
						title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
						rating={5}
					/>
					<Product
						id="2"
						title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
						price={239.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
					/>
				</div>
				<div className="home__productRow">
					<Product
						id="3"
						title="Fitbit Charge 4 Advanced Fitness Tracker with GPS, Swim Tracking & Up To 7 Day Battery, Black"
						price={129.99}
						rating={4}
						image="https://johnlewis.scene7.com/is/image/JohnLewis/238654255?$rsp-pdp-port-1080$"
					/>
					<Product
						id="4"
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						rating={5}
						image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTakX33MagUmfrQFP-H0ZmLQpznWHIvBgnryPUTAa9FCSZR_R_xx8DvtYb5Ocl4c9brHzSXjmaL&usqp=CAc"
					/>
					<Product
						id="5"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
				</div>
				<div className="home__productRow">
					<Product
						id="6"
						title="Samsung LC49RG09SSUXEN 49' Curved LED Gaming Monitor"
						price={1099.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
					/>
				</div>
			</div>			
		</div>				
	);
}

export default Home;
