import React, { createContext, useState, useContext, useEffect } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
	const [messages, setMessages] = useState([{ message: "Selam" }, { message: "Necəsən" }]);

	const values = { messages, setMessages };
	return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
