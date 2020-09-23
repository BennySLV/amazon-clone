import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
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
					<input type="text" />

					<h5>Password</h5>
					<input type="password" />

					<button className="login-sign-in-button"> Sign In</button>
				</form>
				<p>
					By signing-in, you agree to the Amazon Clone conditions of
					Use &amp; Sale. Please see our Privacy Notice, Cookies
					Notice and our Interest-Based Ads Notice.
				</p>
				<p className="not-registered-text">Not registered?</p>
				<button className="login-register-button">
					Create you Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
