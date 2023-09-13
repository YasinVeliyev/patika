import React, { createContext, useState } from "react";

const CityContext = createContext();

export function CityProvider({ children }) {
	let [city, setCity] = useState({ name: "Adana", lat: 36.9863599, lon: 35.3252861, country: "TR" });

	// useEffect(() => {
	// 	fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city.name}&appid=824ef036936b380e1d283fed8a4c4d02`)
	// 		.then((res) => res.json())
	// 		.then((data) => setCity(data[0]))
	// 		.catch(console.error);
	// }, [city.name]);

	let values = { city, setCity };

	return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
}

export default CityContext;
