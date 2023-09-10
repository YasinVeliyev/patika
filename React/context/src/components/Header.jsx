import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Header() {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<div>
			<h1>Active Theme: {theme}</h1>
			<hr />
		</div>
	);
}
