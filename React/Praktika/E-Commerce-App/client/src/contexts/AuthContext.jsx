import React, { useState, useContext, createContext, useEffect } from "react";
import { fetchLogout, fetchMe } from "../api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const me = await fetchMe();
				setLoggedIn(true);
				setUser(me);
			} catch (error) {}
		})();
	});

	const login = (data) => {
		setLoggedIn(true);
		setUser(data.user);
		console.log(data);
		localStorage.setItem("access-token", data.accessToken);
		localStorage.setItem("refresh-token", data.refreshToken);
	};

	const logout = async () => {
		setLoggedIn(false);
		setUser(null);
		await fetchLogout();
		localStorage.removeItem("access-token");
		localStorage.removeItem("refresh-token");
	};

	const values = {
		loggedIn,
		user,
		login,
		logout,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
