import React, { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { init, subscribeNewMessages, getAllMessages } from "../socketApi";
import { useChat } from "../context/ChatContext";

export default function Container() {
	const { setMessages } = useChat();
	useEffect(() => {
		init();
		getAllMessages((messages) => {
			setMessages(messages);
		});
		subscribeNewMessages((message) => {
			setMessages((prevState) => [...prevState, { message }]);
		});
	}, []);
	return (
		<div className="App">
			<ChatList />
			<ChatForm />
		</div>
	);
}
