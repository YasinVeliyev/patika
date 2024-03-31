/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import { State } from "country-state-city";

let CityContext = createContext();

function CityProvider({ children }) {
	const cities = State.getStatesOfCountry("TR");
	const [city, setCity] = useState(cities[0]);
	const values = { city, setCity, cities };

	return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
}

const useCity = () => useContext(CityContext);

export { useCity, CityProvider };
