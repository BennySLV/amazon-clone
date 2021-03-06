const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51HX5nbLW32CVxFOq2o9TwlTnZORlTjHso7r57BRWvQl8l5RZRv2zTmNJQ1ptm2Wjrm1IbYmyawIvfrxaX8IbH69R00Z7hp2h5P"
);

// Set up the API
// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World")); // end point example

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	console.log("Payment request received for this amount: ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // currency sub-units
		currency: "gbp", // Great British Pound
	});

	// Status: OK - (i.e. The payment intent has been created)
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// Listen command - required to run the Express app on a cloud function
exports.api = functions.https.onRequest(app);
