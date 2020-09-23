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

					<button> Sign In</button>
				</form>
				<p>
					By signing-in, you agree to the Amazon Clone conditions of
					Use &amp; Sale. Please see our Privacy Notice, Cookies
					Notice and our Interest-Based Ads Notice.
				</p>
			</div>
		</div>
	);
}

export default Login;
