import React, { useContext } from "react";
import sehirler from "../data/data";
import CityContext from "../context/CityContext";

function Header() {
	const { setCity } = useContext(CityContext);

	function handleChange(event) {
		fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(event.target.value)}&key=999d8372cae64e60b320131e1b01bb42`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.results.filter((res) => res.components.province === event.target.value));
				setCity(data[0]);
			})
			.catch(console.error);
	}

	return (
		<form action="">
			<select name="city" id="" onChange={handleChange}>
				{sehirler.map((sehir, index) => (
					<option value={sehir} key={index}>
						{sehir}
					</option>
				))}
			</select>
		</form>
	);
}

export default React.memo(Header);
