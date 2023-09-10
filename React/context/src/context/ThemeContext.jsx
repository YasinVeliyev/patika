import React, { createContext, useState, useEffect } from "react";

let ThemeContext = createContext();

export function ThemeProvider({ children }) {
	let [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);
	const values = { theme, setTheme };
	return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
}

export default ThemeContext;
