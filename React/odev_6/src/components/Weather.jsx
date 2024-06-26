import { useCity } from "../context/CityContext";
import { useState, useEffect } from "react";
import Spinner from "../../public/Spinner-1s-200px.svg";

export default function Weather() {
	const [weatherData, setWeatherData] = useState([]);
	const [loading, setLoading] = useState(false);
	const { city } = useCity();

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${
				city.longitude
			}&exclude=current,hourly,minutely,alerts&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
		)
			.then((response) => response.json())
			.then((data) => {
				let tmp = {};
				data.list.forEach((d) => {
					let day = new Date(d.dt_txt).getDate();

					if (Object.prototype.hasOwnProperty.call(tmp, day)) {
						let main = tmp[day].main;
						if (main.temp_max < d.main.temp_max) {
							main.temp_max = d.main.temp_max;
						} else if (main.temp_min > d.main.temp_min) {
							main.temp_min = d.main.temp_min;
						}
					} else {
						tmp[day] = d;
					}
				});

				setWeatherData(Object.values(tmp));
			})
			.catch((err) => {
				console.error("Error fetching weather data ", err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [city]);
	return (
		<div className="container">
			{loading && (
				<div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem" }}>
					<div className="loader">
						<img src={Spinner} alt="" />
					</div>
				</div>
			)}
			{!loading && (
				<ul className="day-list">
					{weatherData.map((day, index) => (
						<li className={`${index === 0 && "current-day"} day`} key={index}>
							<div>{new Date(day.dt_txt).toString().split(" ")[0]}</div>
							<img src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`} width={90} height={90} />
							<div style={{ display: "flex", alignItems: "space-around", gap: "3px" }}>
								<span>
									{Math.trunc(day.main.temp_max)}
									<sup>°</sup>/
								</span>
								<span>
									{Math.trunc(day.main.temp_min)}
									<sup>°</sup>
								</span>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
