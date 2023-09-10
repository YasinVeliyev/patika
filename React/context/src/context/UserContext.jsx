import React, { createContext, useState, useEffect } from "react";

let UserContext = createContext();

export function UserProvider({ children }) {
	const [user, setUser] = useState({
		userName: "YasinV",
		id: 1,
		bio: "Programmer",
	});
	const values = { user, setUser };
	return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export default UserContext;
