import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
	const div = document.createElement("div");
	try {
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	} catch (e) {
		console.log(e);
		throw e;
	}
});
