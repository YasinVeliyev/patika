import React, { Component } from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Container from "./components/Container";
import { UserProvider } from "./context/UserContext";

class App extends Component {
	render() {
		return (
			<ThemeProvider>
				<UserProvider>
					<Container />
				</UserProvider>
			</ThemeProvider>
		);
	}
}

export default App;
