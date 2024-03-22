import { Component } from "react";
import { CityProvider } from "./context/CityContext";
import City from "./components/City";
import Weather from "./components/Weather";
class App extends Component {
	render() {
		return (
			<CityProvider>
				<City />
				<Weather />
			</CityProvider>
		);
	}
}

export default App;
