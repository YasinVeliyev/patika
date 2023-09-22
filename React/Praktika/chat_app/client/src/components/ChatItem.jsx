import React from "react";

export default function ChatItem({ msg }) {
	return <div className={`chatItem ${msg.fromMe ? "right" : ""}`}>{msg.message}</div>;
}
