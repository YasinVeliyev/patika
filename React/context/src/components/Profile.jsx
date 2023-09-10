import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
	let { user, setUser } = useContext(UserContext);

	return (
		<div>
			<h1>Profile</h1>
			<code>{JSON.stringify(user)}</code>
		</div>
	);
}
