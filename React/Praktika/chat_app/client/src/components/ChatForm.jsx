import React from "react";
import { useState } from "react";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";

export default function ChatForm() {
	const [message, setMessage] = useState("");
	const { setMessages } = useChat();

	function handleSubmit(event) {
		event.preventDefault();
		setMessages((prevState) => [...prevState, { message, fromMe: true }]);
		sendMessage(message);
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
