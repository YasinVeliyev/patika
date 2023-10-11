import React from "react";
import { Route, Routes, redirect } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Profile from "./Profile";
import Products from "./Products";

function ProtoctedRoute({ component: Component, ...rest }) {
	const { loggedIn } = useAuth();

	if (loggedIn) {
		return <Component {...rest} />;
	}
	return <Products />;
}

export default ProtoctedRoute;
