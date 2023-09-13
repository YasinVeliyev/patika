import React, { useContext, useEffect, useState } from "react";
import CityContext from "../context/CityContext";

function Display() {
	const { city } = useContext(CityContext);
	const [weather, setWeather] = useState();

	function getWeatherData() {
		// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&cnt=2&appid=824ef036936b380e1d283fed8a4c4d02`)
		fetch("https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=qCDg6eCHHCqRApddixTqbHpqlrGHTfTd")
			.then((res) => res.json())
			.then((data) => {
				setWeather(data);
			})
			.catch(console.error);
	}
	console.log(city);
	useEffect(() => getWeatherData(), []);
	// if (weather) {
	// 	console.log(city);
	// 	console.log(`https://openweathermap.org/img/wn/10d@${weather.weather[0].icon}`);
	// }
	// console.log(`https://openweathermap.org/img/wn/10d@${weather.weather[0].icon}`);
	return (
		<div>
			<div id="openweathermap-widget-11"></div>
		</div>
	);
}

export default React.memo(Display);
