import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-clone-79c84.cloudfunctions.net/api", // The API (cloud function - endpoint) URL
	//http://localhost:5001/clone-79c84/us-central1/api // localhost api request - for debugging purposes
});

export default instance;
