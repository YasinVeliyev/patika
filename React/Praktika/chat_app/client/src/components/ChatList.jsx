import React, { useEffect } from "react";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";

export default function ChatList() {
	const { messages } = useChat();
	useEffect(() => {
		let div_ = document.querySelector(".chatlist>div");
		if (div_) {
			div_.scrollTop = div_.scrollHeight;
		}
	}),
		[];

	return (
		<div className="chatlist">
			<div>
				{messages.map((msg, index) => {
					return <ChatItem key={index} msg={msg} />;
				})}
			</div>
		</div>
	);
}
