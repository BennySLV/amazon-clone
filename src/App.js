import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import Home from "./Home";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51HX5nbLW32CVxFOqQ2cErkDRhG2GZVkxOoero2MsTBfGwyKUMOIJBI86ixxsQVaUCpoZEcnz3CBq0aDkkfKeLtU100em9qPX22"
);

function App() {
	const [{}, dispatch] = useStateValue();

	// Will only run once when the app component loads
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("The user is: ", authUser);
			if (authUser) {
				// the user just logged in or the user was logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user has logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/orders">
						<Orders />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
