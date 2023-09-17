import React from "react";
import { useState } from "react";

export default function ChatForm() {
	const [message, setMessage] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		console.log(message);
		setMessage("");
	}

	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<input
					type="text"
					className="textInput"
					value={message}
					onChange={(event) => {
						setMessage(event.target.value);
					}}
				/>
			</form>
		</div>
	);
}
