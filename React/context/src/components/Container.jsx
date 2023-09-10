import React, { useContext } from "react";
import Button from "./Button";
import Header from "./Header";
import ThemeContext from "../context/ThemeContext";
import Profile from "./Profile";

export default function Container() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`app ${theme}`}>
			<Header />
			<Button />
			<Profile />
		</div>
	);
}
