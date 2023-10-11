import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { useAuth } from "../../../contexts/AuthContext";

function Profile() {
	const { user, logout } = useAuth();
	const handleLogout = async () => {
		logout();
	};

	return (
		<div>
			<Text fontSize={22}>Profile</Text>
			<code>{JSON.stringify(user)}</code>
			<Button colorScheme="pink" variant="solid" onClick={handleLogout}>
				Logout
			</Button>
		</div>
	);
}

export default Profile;
