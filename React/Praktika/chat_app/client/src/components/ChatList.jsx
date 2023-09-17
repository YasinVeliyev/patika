import React from "react";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";

export default function ChatList() {
	const { messages } = useChat();

	return (
		<div className="chatlist">
			<div>
				{messages.map((msg, index) => {
					return <ChatItem key={index} msg={msg.message} />;
				})}
			</div>
		</div>
	);
}
