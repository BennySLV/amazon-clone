import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		// TODO: Firebase sign-in functionality
	};

	const register = () => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth);
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login-logo"
					src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp"
				/>
			</Link>
			<div className="login-container">
				<h1>Sign-in</h1>
				<form>
					<h5>Email</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						type="submit"
						className="login-sign-in-button"
						onClick={signIn}
					>
						Sign In
					</button>
				</form>
				<p>
					By signing-in, you agree to the Amazon Clone conditions of
					Use &amp; Sale. Please see our Privacy Notice, Cookies
					Notice and our Interest-Based Ads Notice.
				</p>
				<p className="not-registered-text">Don't have an account?</p>
				<button
					onClick={register}
					type="submit"
					className="login-register-button"
				>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
