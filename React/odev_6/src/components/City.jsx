import { State } from "country-state-city";
import { useCity } from "../context/CityContext";

export default function City() {
	const { cities, city, setCity } = useCity();

	return (
		<div
			className="city"
			style={{ backgroundColor: "whitesmoke", padding: "1rem 2rem", borderRadius: "0.25rem", display: "flex", justifyContent: "center" }}
		>
			<select name="cities" onChange={(e) => setCity(...cities.filter((city) => city.name === e.target.value))} value={city.name}>
				{State.getStatesOfCountry("TR").map((city, index) => (
					<option key={index} value={city.name}>
						{city.name}
					</option>
				))}
			</select>
		</div>
	);
}
