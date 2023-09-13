import React, { Component } from "react";

import "./App.css";
import Header from "./container.jsx/Header";
import { CityProvider } from "./context/CityContext";

import Display from "./container.jsx/Display";

class App extends Component {
	render() {
		return (
			<div className="App">
				<CityProvider>
					<Header />
					<Display />
				</CityProvider>
			</div>
		);
	}
}

export default App;
