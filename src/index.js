import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App";

try {
	render(<App />, document.getElementById("root"));
} catch (e) {
	console.log(e);
	throw e;
}
