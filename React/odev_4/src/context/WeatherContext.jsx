import React, { createContext, useState } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
	let [weather, setWeather] = useState();

	let values = { weather, setWeather };

	return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
}

export default WeatherContext;
