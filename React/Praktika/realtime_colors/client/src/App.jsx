import React, { Component } from "react";
import Pallet from "./components/Pallet";
import "./App.css";
import { init, subscribe } from "./socketApi";

class App extends Component {
	constructor() {
		super();
		this.state = { activeColor: "#282c34" };
	}
	componentDidMount() {
		init();
		subscribe((color) => this.setState({ activeColor: color }));
	}

	render() {
		return (
			<div className="App" style={{ backgroundColor: this.state.activeColor }}>
				<Pallet color={this.state.activeColor} />
			</div>
		);
	}
}

export default App;
