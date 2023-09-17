import React, { Component } from "react";
import Container from "./components/Container";
import "./components/styles.module.css";

import "./App.css";
import { ChatProvider } from "./context/ChatContext";

class App extends Component {
	render() {
		return (
			<ChatProvider>
				<Container />
			</ChatProvider>
		);
	}
}

export default App;
